/**
 * @version 1.0.9175.29939
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlayableTestManager start.*/
    Bridge.define("PlayableTestManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            blastRadius: 0,
            forceMin: 0,
            forceMax: 0,
            ballCount: 0,
            forcePos: null,
            instantiatePos: null,
            ball: null,
            balls: null
        },
        ctors: {
            init: function () {
                this.blastRadius = 10.0;
                this.forceMin = 30.0;
                this.forceMax = 60;
                this.ballCount = 20;
                this.balls = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*PlayableTestManager.InstantiateBalls start.*/
            InstantiateBalls: function () {
                this.StartCoroutine$1(this.InstantateRoutine());
            },
            /*PlayableTestManager.InstantiateBalls end.*/

            /*PlayableTestManager.ResetBalls start.*/
            ResetBalls: function () {
                for (var i = 0; i < this.balls.Count; i = (i + 1) | 0) {
                    if (UnityEngine.GameObject.op_Inequality(this.balls.getItem(i), null)) {
                        UnityEngine.MonoBehaviour.Destroy(this.balls.getItem(i));
                    }
                }

                this.balls.clear();
            },
            /*PlayableTestManager.ResetBalls end.*/

            /*PlayableTestManager.InstantateRoutine start.*/
            InstantateRoutine: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    instantiatedBall,
                    rb,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < this.ballCount ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    instantiatedBall = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.ball, this.instantiatePos.position.$clone().add( new pc.Vec3( UnityEngine.Random.Range$1(0, 0.2), UnityEngine.Random.Range$1(0, 0.2), UnityEngine.Random.Range$1(0, 0.2) ) ), pc.Quat.IDENTITY.clone());
                                        this.balls.add(instantiatedBall);
                                        rb = instantiatedBall.GetComponent(UnityEngine.Rigidbody);

                                        if (UnityEngine.Component.op_Inequality(rb, null)) {
                                            rb.AddExplosionForce(UnityEngine.Random.Range$1(this.forceMin, this.forceMax), this.forcePos.position, this.blastRadius);
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayableTestManager.InstantateRoutine end.*/

            /*PlayableTestManager.InstallFullGame start.*/
            InstallFullGame: function () {
                Luna.Unity.Playable.InstallFullGame();
            },
            /*PlayableTestManager.InstallFullGame end.*/


        }
    });
    /*PlayableTestManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine","System.Collections.Generic"];

    /*PlayableTestManager start.*/
    $m("PlayableTestManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InstallFullGame","t":8,"sn":"InstallFullGame","rt":$n[0].Void},{"a":1,"n":"InstantateRoutine","t":8,"sn":"InstantateRoutine","rt":$n[1].IEnumerator},{"a":2,"n":"InstantiateBalls","t":8,"sn":"InstantiateBalls","rt":$n[0].Void},{"a":2,"n":"ResetBalls","t":8,"sn":"ResetBalls","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ball","t":4,"rt":$n[2].GameObject,"sn":"ball"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballCount","t":4,"rt":$n[0].Int32,"sn":"ballCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"balls","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"balls"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"blastRadius","t":4,"rt":$n[0].Single,"sn":"blastRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"forceMax","t":4,"rt":$n[0].Single,"sn":"forceMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"forceMin","t":4,"rt":$n[0].Single,"sn":"forceMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"forcePos","t":4,"rt":$n[2].Transform,"sn":"forcePos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"instantiatePos","t":4,"rt":$n[2].Transform,"sn":"instantiatePos"}]}; }, $n);
    /*PlayableTestManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
