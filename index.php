<!DOCTYPE html>
<html>
    <head>
        <script src="scripts/vendor/require.js" data-main="scripts/main.js?bust=<?php echo time() ?>"></script>
        <link href="styles/bootstrap.css" type="text/css" rel="stylesheet">
        <link href="styles/style.css" type="text/css" rel="stylesheet">
        
        <title>DKT</title>
    </head>
    <body>
        <div id="board">
            <div class="tile-container tile-container-top">
                <div class="tile tile-corner tile-risk" data-field="21">
                    <div class="title">
                        Risiko
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-green" data-field="22">
                    <div class="title">
                        Museums-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-risk" data-field="23">
                    <div class="title">
                        Risiko
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-transport" data-field="24">
                    <div class="title">
                        Glockner-<br />
                        strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-yellow" data-field="25">
                    <div class="title">
                        Mirabell-<br />
                        Platz
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-yellow" data-field="26">
                    <div class="title">
                        Westbahn-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-yellow" data-field="27">
                    <div class="title">
                        Universit&auml;ts-<br />
                        Platz
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-bank" data-field="28">
                    <div class="title">
                        Bank
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-orange" data-field="29">
                    <div class="title">
                        Burggasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-orange" data-field="30">
                    <div class="title">
                        Villacher-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
            </div>

            <div class="tile-container tile-container-right">
                <div class="tile tile-corner tile-risk" data-field="31">
                    <div class="title">
                        Gef&auml;ngniss
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-orange" data-field="32">
                    <div class="title">
                        Alterplatz
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-taxes" data-field="33">
                    <div class="title">
                        Erwerbssteuer
                        <div>80,-</div>
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-transport" data-field="34">
                    <div class="title">
                        <div>Fluglinie</div>
                        Wien-Venedig
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-lightblue" data-field="35">
                    <div class="title">
                        Maria<br />
                        Theresien-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-lightblue" data-field="36">
                    <div class="title">
                        Andreas-<br />
                        Hofer-Str.
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-lightblue" data-field="37">
                    <div class="title">
                        Bozner-<br />
                        Platz
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-risk" data-field="38">
                    <div class="title">
                        Risiko
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-blue" data-field="39">
                    <div class="title">
                        Arlberg-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-blue" data-field="40">
                    <div class="title">
                        Rathaus-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
            </div>

            <div class="tile-container tile-container-bottom">
                <div class="tile tile-corner tile-start" data-field="1">
                    <div class="title">
                        Start
                    </div>
                    <div class="player-container">
                        <div id="player-1" class="player player-yellow">1</div>
                        <div id="player-2" class="player player-blue">2</div>
                        <div id="player-3" class="player player-green">3</div>
                        <div id="player-4" class="player player-red">4</div>
                    </div>
                </div>
                <div class="tile tile-building tile-blue" data-field="2">
                    <div class="title">
                        Amtsplatz
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-risk" data-field="3">
                    <div class="title">
                        Risiko
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-transport" data-field="4">
                    <div class="title">
                        <div>Elektr.</div>
                        Kraft--<br />
                        Zentrale
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-brown" data-field="5">
                    <div class="title">
                        Murplatz
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-brown" data-field="6">
                    <div class="title">
                        Annen-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-brown" data-field="7">
                    <div class="title">
                        Joaneum-<br />
                        Ring
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-transport" data-field="8">
                    <div class="title">
                        <div>Eisenbahn</div>
                        Wien - Graz
                    </div>
                </div>
                <div class="tile tile-bank" data-field="9">
                    <div class="title">
                        Bank
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-rosa" data-field="10">
                    <div class="title">
                        Jos. Haydn-<br />
                        Gasse
                    </div>
                    <div class="player-container"></div>
                </div>
            </div>

            <div class="tile-container tile-container-left">
                <div class="tile tile-corner tile-law" data-field="11">
                    <div class="title">
                        Gesetzes- <div>§</div> Verletzung
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-rosa" data-field="12">
                    <div class="title">
                        Schloss-<br />
                        Grund
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-transport" data-field="13">
                    <div class="title">
                        <div>Eisenbahn</div>
                        Wien - Budapest
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-transport" data-field="14">
                    <div class="title">
                        Seilbahn
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-red" data-field="15">
                    <div class="title">
                        K&auml;rtner-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-red" data-field="16">
                    <div class="title">
                        Kobenzl-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-red" data-field="17">
                    <div class="title">
                        Kobenzl-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-transport" data-field="18">
                    <div class="title">
                        <div>Eisenbahn</div>
                        Wien - Innsbruck
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-green" data-field="19">
                    <div class="title">
                        Land-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
                <div class="tile tile-building tile-green" data-field="20">
                    <div class="title">
                        Stifter-<br />
                        Strasse
                    </div>
                    <div class="player-container"></div>
                </div>
            </div>
            
        </div>
        
    </body>
</html>