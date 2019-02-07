1. Útskýrðu stuttlega eftirfarandi hugtök og hlutverk: (1%)
* GPU - Graphics processing unit - hluturinn í tölvunni sem sér um að teikna á skjáin.
* Pixels - Pixel er minnsta graphical unit sem til er og er margir pixlar notaðir til að gera heila mynd á skjá. Því fleirri pixlar því betri verður myndin.
* Frame buffer - Minni í GPU sem geymir upplýsingar um hvernig á að teikna frame.
* Raster-scan - Er ferill við að sýna mynd með því að uppfæra hvern pixla einn eftir annan, frekar en alla á sama tíma, með öllum pixlum á skjánum uppfærðir í einu ramma. 
* Refresh rate - Er hversu oft skjárinn þinn uppfærir sig.
* WebGL og OpenGL - WebGL er JavaScript API fyrir að teikna 2d og 3d graphics í web browser. WebGL er skrifaður úr kóða í JavaScript og shader kóða sem er skrifaður í OpenGL. OpenGL - er cross-language, cross-platform API til að teikna 2d og 3d vector graphics.

2. Útskýrðu ítarlega og tæknilega (án kóða) hvernig rendering pipeline virkar í WebGL.
Notaðu skýringamynd þér til stuðnings. (2%)

![buffer Flow](https://www.tutorialspoint.com/webgl/images/webgl_graphics_pipeline.jpg)
Fyrst er Vertex set (x, y, z púnktar) sem þú gerir, það er síðan sett inn í uniform bufferinn sem er notaður til að geyma það. Vertex shaderinn notar það síðan til að reikna út hvar púnktarnir eiga að vera á skjánum og setja það inn í varyings sem eru í raun bara variable inn í Vertex shadernum. Næst er Fragment shaderinn sem nær í öll gögnin úr varyings í Vertex shadernum og reiknar út litinn á öllum pixlunum inn á milli púnktana. Það er síðan geymt sem pixlar í frame buffernum sem er síðan sett inn á canvasinn.

Hvað er WebGL Shaders og Graphics Library Shader Language (GLSL) og hvert er
þeirra hlutverk. Sjá t.d. grein:
 https://webgl2fundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html (2%)
 Shader er í rauninni bara forrit inn í leiknum sem er runað á skjákortinu síðan. Í byrjun eru bara 2 shaderar, Vertex shader og Fragment shader þar sem Vertex reiknar út staðsetningu púnktana á skjánum og Fragment shader finnur út litinn fyrir hvern pixla. GLSL eða OpenGL Shading Language er forritunarmál sem er notað til að búa til shadera. Það er sérstaklega hannað til að reikna út hluti tengda því og þess vegna er það mjög gott til að gera shadera.
