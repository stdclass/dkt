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
                <div class="tile tile-transport" data-field="8">
                    <div class="title">
                        <div>Eisenbahn</div>
                        Wien - Graz
                    </div>
                    <div class="player-container"></div>
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
        
        <div id="sidebar">
            <div class="slide active" data-slide-id="main">
                <div class="info-container">
                    <div class="info-title">
                        <h2 class="pull-left">Profil </h2>
                        <div class="pull-right">
                            <div class="reveal">
                                <p>PHILLIP</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <br />
                    <div class="row">
                        <a href="javascript:;" data-slide="money" class="col-xs-4 info-box">
                            <div class="title" id="player-info-money">
                                650,-
                            </div>
                            <div class="sub-title">
                                cash
                            </div>
                            <div class="seperator"></div>
                        </a>
                        <div class="col-xs-4 info-box">
                            <div class="title" id="player-info-properties">
                                2
                            </div>
                            <div class="sub-title">
                                eigent&uuml;mer
                            </div>
                            <div class="seperator"></div>
                        </div>
                        <div class="col-xs-4 info-box">
                            <div class="title" id="player-info-position">
                                1
                            </div>
                            <div class="sub-title">
                                position
                            </div>
                        </div>
                    </div>
                    <div class="seperator"></div>
                    <div class="info-title">
                        <h2>Spieler</h2>
                    </div>
                    <div class="row">
                        <a href="javascript:;" data-slide="money" class="col-xs-3 info-box player-info-small" data-player="1">
                            <div class="title" id="player-info-money">
                                <div class="dot dot-red"></div>
                            </div>
                            <div class="sub-title">
                                <div class="reveal">Phillip</div>
                            </div>
                            <div class="seperator"></div>
                        </a>
                        <div class="col-xs-3 info-box player-info-small">
                            <div class="title" id="player-info-properties">
                                <div class="dot dot-yellow"></div>
                            </div>
                            <div class="sub-title">
                                <div class="reveal">Alex</div>
                            </div>
                            <div class="seperator"></div>
                        </div>
                        <div class="col-xs-3 info-box player-info-small">
                            <div class="title" id="player-info-position">
                                <div class="dot dot-blue"></div>
                            </div>
                            <div class="sub-title">
                                <div class="reveal">Thomas</div>
                            </div>
                            <div class="seperator"></div>
                        </div>
                        <div class="col-xs-3 info-box player-info-small">
                            <div class="title" id="player-info-position">
                                <div class="dot dot-green"></div>
                            </div>
                            <div class="sub-title">
                                <div class="reveal">Laurin</div>
                            </div>
                        </div>
                    </div>

                    

                    <div class="seperator"></div>
                    <div class="info-title">
                        <h2>Geschichte</h2>
                    </div>
                    
                    <div id="log-container">
                    </div>
                    
                    <div class="large-action" id="roll-dice">
                        W&uuml;rfeln
                    </div>
                </div>
            </div>
            <div class="slide" data-slide-id="money">
                <div class="info-title">
                    <h2 class="pull-left">Geld</h2>
                    <div class="pull-right">
                        <div class="reveal">
                            <a href="javascript:;" class="btn btn-primary" data-slide="_back">Zur&uuml;ck</a>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        
        <!-- play some jazz -->
        <div style="display: none;"><xiframe src="https://www.youtube.com/embed/Kg4WgZNb_uc?autoplay=1" frameborder="0" allowfullscreen></xiframe></div>
        
        <audio style="visibility: hidden" id="sound-roll-dice">
            <source src="sounds/roll-dice.mp3" type="audio/mpeg">
        </audio>
    </body>
</html>