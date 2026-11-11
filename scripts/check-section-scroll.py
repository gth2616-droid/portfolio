"""Browser regression: one wheel gesture advances one section.
Run `npm run build` then `python scripts/check-section-scroll.py`.
Requires Python Playwright and Chromium (or CHROMIUM_EXECUTABLE_PATH).
"""
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
import shutil
import threading

root = Path(__file__).resolve().parents[1]
assert (root/'dist/index.html').exists(), 'Run npm run build first.'
browser_path = os.environ.get('CHROMIUM_EXECUTABLE_PATH') or shutil.which('chromium') or shutil.which('chromium-browser') or shutil.which('google-chrome')
assert browser_path, 'Install Chromium or set CHROMIUM_EXECUTABLE_PATH.'
class Quiet(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass
server = ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(root/'dist')))
threading.Thread(target=server.serve_forever,daemon=True).start()

try:
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
     b=p.chromium.launch(executable_path=browser_path,args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1440,'height':900});errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto(f'http://127.0.0.1:{server.server_port}/');page.evaluate('document.fonts.ready');page.wait_for_timeout(1150)
     assert page.evaluate('document.documentElement.hasAttribute("data-section-scroll")')
     assert page.locator('.screen-rail a').count()==17
     def at(id):
      assert abs(page.locator('#'+id).bounding_box()['y']-72)<5,(id,page.locator('#'+id).bounding_box())
     def rail(id,anchor=None):
      page.locator(f'.screen-rail a[data-panel="{id}"]').click();page.wait_for_function('(hash)=>location.hash==="#"+hash && document.querySelector(".chapter-curtain").hidden',arg=anchor or id);page.wait_for_timeout(150);at(id)
     page.mouse.move(20,450);page.mouse.wheel(0,4000);page.wait_for_timeout(850);at('overview');assert page.evaluate('location.hash')=='#overview'
     page.mouse.wheel(0,-120);page.wait_for_timeout(850);at('cover')
     # A stream longer than the 660ms page animation must still move only one page.
     for i in range(45):page.mouse.wheel(0,42);page.wait_for_timeout(12)
     page.wait_for_timeout(350);at('overview')
     page.mouse.wheel(0,120);page.wait_for_timeout(850);at('badges')
     page.mouse.wheel(0,120);page.wait_for_timeout(850);at('badge-collection')
     page.mouse.wheel(0,120);page.wait_for_timeout(850);at('package-index')
     page.mouse.wheel(0,120);page.wait_for_timeout(850);at('single')
     host=page.locator('#single-viewer');page.wait_for_function('document.querySelector("#single-viewer").dataset.state==="flat"',timeout=45000);box=host.locator('.stage').bounding_box();page.mouse.move(box['x']+box['width']/2,box['y']+box['height']/2);zoom=host.evaluate('(e)=>e.viewer.getState().zoom');y=page.evaluate('scrollY');page.mouse.wheel(0,-180);page.wait_for_timeout(200);assert host.evaluate('(e)=>e.viewer.getState().zoom')!=zoom;assert abs(page.evaluate('scrollY')-y)<2
     rail('commerce-screen','digital');sc=page.locator('.shop-scroll');box=sc.bounding_box();page.mouse.move(box['x']+box['width']/2,box['y']+box['height']/2);y=page.evaluate('scrollY');page.mouse.wheel(0,350);page.wait_for_timeout(180);assert sc.evaluate('(e)=>e.scrollTop')>0;assert abs(page.evaluate('scrollY')-y)<2
     rail('social-screen');assert page.locator('#main-nav a[aria-current]').get_attribute('href')=='#digital'
     rail('experience');page.locator('#concept-gallery-toggle').click();assert page.locator('.concept-gallery-item:visible').count()==24;rail('experience');page.mouse.move(20,450);y=page.evaluate('scrollY');page.mouse.wheel(0,180);page.wait_for_timeout(350);assert page.evaluate('scrollY')>y;assert page.locator('.screen-rail a[aria-current]').get_attribute('data-panel')=='experience'
     page.locator('#concept-gallery-toggle').click();rail('about');page.mouse.move(20,450);page.mouse.wheel(0,120);page.wait_for_timeout(850);assert page.locator('.screen-rail a[aria-current]').get_attribute('data-panel')=='footer'
     rail('cover');page.emulate_media(reduced_motion='reduce');page.mouse.move(20,450);page.mouse.wheel(0,120);page.wait_for_timeout(70);at('overview');assert page.evaluate('document.documentElement.dataset.sectionMoving') is None
     page.emulate_media(reduced_motion='no-preference');rail('cover');page.evaluate('document.activeElement.blur()');page.keyboard.press('PageDown');page.wait_for_timeout(850);at('overview');page.keyboard.press('PageUp');page.wait_for_timeout(850);at('cover')
     page.mouse.move(20,450);page.mouse.wheel(0,120);page.wait_for_timeout(180);page.emulate_media(reduced_motion='reduce');page.wait_for_timeout(100);at('overview')
     assert not errors,errors;b.close()
    print('Passed: one large notch = one section; long inertia burst = one section; next gesture advances; reverse direction; chapter intro/footer stops; 3D zoom, phone scroll, expanded gallery and reduced motion preserved.')
finally:
    server.shutdown()
    server.server_close()
