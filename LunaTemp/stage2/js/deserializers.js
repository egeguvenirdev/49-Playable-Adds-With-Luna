var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.JointSpring' )
  var i2159 = data
  i2158.spring = i2159[0]
  i2158.damper = i2159[1]
  i2158.targetPosition = i2159[2]
  return i2158
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointMotor' )
  var i2161 = data
  i2160.m_TargetVelocity = i2161[0]
  i2160.m_Force = i2161[1]
  i2160.m_FreeSpin = i2161[2]
  return i2160
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.JointLimits' )
  var i2163 = data
  i2162.m_Min = i2163[0]
  i2162.m_Max = i2163[1]
  i2162.m_Bounciness = i2163[2]
  i2162.m_BounceMinVelocity = i2163[3]
  i2162.m_ContactDistance = i2163[4]
  i2162.minBounce = i2163[5]
  i2162.maxBounce = i2163[6]
  return i2162
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.JointDrive' )
  var i2165 = data
  i2164.m_PositionSpring = i2165[0]
  i2164.m_PositionDamper = i2165[1]
  i2164.m_MaximumForce = i2165[2]
  i2164.m_UseAcceleration = i2165[3]
  return i2164
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2167 = data
  i2166.m_Spring = i2167[0]
  i2166.m_Damper = i2167[1]
  return i2166
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2169 = data
  i2168.m_Limit = i2169[0]
  i2168.m_Bounciness = i2169[1]
  i2168.m_ContactDistance = i2169[2]
  return i2168
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2171 = data
  i2170.m_ExtremumSlip = i2171[0]
  i2170.m_ExtremumValue = i2171[1]
  i2170.m_AsymptoteSlip = i2171[2]
  i2170.m_AsymptoteValue = i2171[3]
  i2170.m_Stiffness = i2171[4]
  return i2170
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2173 = data
  i2172.m_LowerAngle = i2173[0]
  i2172.m_UpperAngle = i2173[1]
  return i2172
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2175 = data
  i2174.m_MotorSpeed = i2175[0]
  i2174.m_MaximumMotorTorque = i2175[1]
  return i2174
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2177 = data
  i2176.m_DampingRatio = i2177[0]
  i2176.m_Frequency = i2177[1]
  i2176.m_Angle = i2177[2]
  return i2176
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2179 = data
  i2178.m_LowerTranslation = i2179[0]
  i2178.m_UpperTranslation = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2180 = root || new pc.UnityMaterial()
  var i2181 = data
  i2180.name = i2181[0]
  request.r(i2181[1], i2181[2], 0, i2180, 'shader')
  i2180.renderQueue = i2181[3]
  i2180.enableInstancing = !!i2181[4]
  var i2183 = i2181[5]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2183[i + 0]) );
  }
  i2180.floatParameters = i2182
  var i2185 = i2181[6]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2185[i + 0]) );
  }
  i2180.colorParameters = i2184
  var i2187 = i2181[7]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2187[i + 0]) );
  }
  i2180.vectorParameters = i2186
  var i2189 = i2181[8]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2189[i + 0]) );
  }
  i2180.textureParameters = i2188
  var i2191 = i2181[9]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2191[i + 0]) );
  }
  i2180.materialFlags = i2190
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.value = i2195[1]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.value = new pc.Color(i2199[1], i2199[2], i2199[3], i2199[4])
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.value = new pc.Vec4( i2203[1], i2203[2], i2203[3], i2203[4] )
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2207 = data
  i2206.name = i2207[0]
  request.r(i2207[1], i2207[2], 0, i2206, 'value')
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.enabled = !!i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.width = i2213[1]
  i2212.height = i2213[2]
  i2212.mipmapCount = i2213[3]
  i2212.anisoLevel = i2213[4]
  i2212.filterMode = i2213[5]
  i2212.hdr = !!i2213[6]
  i2212.format = i2213[7]
  i2212.wrapMode = i2213[8]
  i2212.alphaIsTransparency = !!i2213[9]
  i2212.alphaSource = i2213[10]
  i2212.graphicsFormat = i2213[11]
  i2212.sRGBTexture = !!i2213[12]
  i2212.desiredColorSpace = i2213[13]
  i2212.wrapU = i2213[14]
  i2212.wrapV = i2213[15]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2215 = data
  i2214.position = new pc.Vec3( i2215[0], i2215[1], i2215[2] )
  i2214.scale = new pc.Vec3( i2215[3], i2215[4], i2215[5] )
  i2214.rotation = new pc.Quat(i2215[6], i2215[7], i2215[8], i2215[9])
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2217 = data
  i2216.center = new pc.Vec3( i2217[0], i2217[1], i2217[2] )
  i2216.size = new pc.Vec3( i2217[3], i2217[4], i2217[5] )
  i2216.enabled = !!i2217[6]
  i2216.isTrigger = !!i2217[7]
  request.r(i2217[8], i2217[9], 0, i2216, 'material')
  return i2216
}

Deserializers["Card"] = function (request, data, root) {
  var i2218 = root || request.c( 'Card' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'frontRenderer')
  request.r(i2219[2], i2219[3], 0, i2218, 'backRenderer')
  request.r(i2219[4], i2219[5], 0, i2218, 'shadowHandRenderer')
  request.r(i2219[6], i2219[7], 0, i2218, 'shadowDeckRenderer')
  request.r(i2219[8], i2219[9], 0, i2218, 'shadowThrowRenderer')
  request.r(i2219[10], i2219[11], 0, i2218, 'shadowMeldingRenderer')
  request.r(i2219[12], i2219[13], 0, i2218, 'shadowOutline')
  request.r(i2219[14], i2219[15], 0, i2218, 'layOffOutline')
  request.r(i2219[16], i2219[17], 0, i2218, 'container')
  var i2221 = i2219[18]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 2, i2220, '')
  }
  i2218.sprites = i2220
  request.r(i2219[19], i2219[20], 0, i2218, 'highlightRenderer')
  var i2223 = i2219[21]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 4) {
    i2222.push( new pc.Color(i2223[i + 0], i2223[i + 1], i2223[i + 2], i2223[i + 3]) );
  }
  i2218.highlightColors = i2222
  i2218.blockedColor = new pc.Color(i2219[22], i2219[23], i2219[24], i2219[25])
  i2218.nonBlockedColor = new pc.Color(i2219[26], i2219[27], i2219[28], i2219[29])
  request.r(i2219[30], i2219[31], 0, i2218, 'boxCollider')
  var i2225 = i2219[32]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 4) {
    i2224.push( new pc.Color(i2225[i + 0], i2225[i + 1], i2225[i + 2], i2225[i + 3]) );
  }
  i2218.layOffColors = i2224
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2231 = data
  i2230.enabled = !!i2231[0]
  request.r(i2231[1], i2231[2], 0, i2230, 'sharedMaterial')
  var i2233 = i2231[3]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2230.sharedMaterials = i2232
  i2230.receiveShadows = !!i2231[4]
  i2230.shadowCastingMode = i2231[5]
  i2230.sortingLayerID = i2231[6]
  i2230.sortingOrder = i2231[7]
  i2230.lightmapIndex = i2231[8]
  i2230.lightmapSceneIndex = i2231[9]
  i2230.lightmapScaleOffset = new pc.Vec4( i2231[10], i2231[11], i2231[12], i2231[13] )
  i2230.lightProbeUsage = i2231[14]
  i2230.reflectionProbeUsage = i2231[15]
  i2230.color = new pc.Color(i2231[16], i2231[17], i2231[18], i2231[19])
  request.r(i2231[20], i2231[21], 0, i2230, 'sprite')
  i2230.flipX = !!i2231[22]
  i2230.flipY = !!i2231[23]
  i2230.drawMode = i2231[24]
  i2230.size = new pc.Vec2( i2231[25], i2231[26] )
  i2230.tileMode = i2231[27]
  i2230.adaptiveModeThreshold = i2231[28]
  i2230.maskInteraction = i2231[29]
  i2230.spriteSortPoint = i2231[30]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.tagId = i2237[1]
  i2236.enabled = !!i2237[2]
  i2236.isStatic = !!i2237[3]
  i2236.layer = i2237[4]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.atlasId = i2239[1]
  i2238.mipmapCount = i2239[2]
  i2238.hdr = !!i2239[3]
  i2238.size = i2239[4]
  i2238.anisoLevel = i2239[5]
  i2238.filterMode = i2239[6]
  var i2241 = i2239[7]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 4) {
    i2240.push( UnityEngine.Rect.MinMaxRect(i2241[i + 0], i2241[i + 1], i2241[i + 2], i2241[i + 3]) );
  }
  i2238.rects = i2240
  i2238.wrapU = i2239[8]
  i2238.wrapV = i2239[9]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.index = i2245[1]
  i2244.startup = !!i2245[2]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2247 = data
  i2246.enabled = !!i2247[0]
  i2246.aspect = i2247[1]
  i2246.orthographic = !!i2247[2]
  i2246.orthographicSize = i2247[3]
  i2246.backgroundColor = new pc.Color(i2247[4], i2247[5], i2247[6], i2247[7])
  i2246.nearClipPlane = i2247[8]
  i2246.farClipPlane = i2247[9]
  i2246.fieldOfView = i2247[10]
  i2246.depth = i2247[11]
  i2246.clearFlags = i2247[12]
  i2246.cullingMask = i2247[13]
  i2246.rect = i2247[14]
  request.r(i2247[15], i2247[16], 0, i2246, 'targetTexture')
  i2246.usePhysicalProperties = !!i2247[17]
  i2246.focalLength = i2247[18]
  i2246.sensorSize = new pc.Vec2( i2247[19], i2247[20] )
  i2246.lensShift = new pc.Vec2( i2247[21], i2247[22] )
  i2246.gateFit = i2247[23]
  i2246.commandBufferCount = i2247[24]
  i2246.cameraType = i2247[25]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2249 = data
  i2248.pivot = new pc.Vec2( i2249[0], i2249[1] )
  i2248.anchorMin = new pc.Vec2( i2249[2], i2249[3] )
  i2248.anchorMax = new pc.Vec2( i2249[4], i2249[5] )
  i2248.sizeDelta = new pc.Vec2( i2249[6], i2249[7] )
  i2248.anchoredPosition3D = new pc.Vec3( i2249[8], i2249[9], i2249[10] )
  i2248.rotation = new pc.Quat(i2249[11], i2249[12], i2249[13], i2249[14])
  i2248.scale = new pc.Vec3( i2249[15], i2249[16], i2249[17] )
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.planeDistance = i2251[1]
  i2250.referencePixelsPerUnit = i2251[2]
  i2250.isFallbackOverlay = !!i2251[3]
  i2250.renderMode = i2251[4]
  i2250.renderOrder = i2251[5]
  i2250.sortingLayerName = i2251[6]
  i2250.sortingOrder = i2251[7]
  i2250.scaleFactor = i2251[8]
  request.r(i2251[9], i2251[10], 0, i2250, 'worldCamera')
  i2250.overrideSorting = !!i2251[11]
  i2250.pixelPerfect = !!i2251[12]
  i2250.targetDisplay = i2251[13]
  i2250.overridePixelPerfect = !!i2251[14]
  return i2250
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2253 = data
  i2252.m_UiScaleMode = i2253[0]
  i2252.m_ReferencePixelsPerUnit = i2253[1]
  i2252.m_ScaleFactor = i2253[2]
  i2252.m_ReferenceResolution = new pc.Vec2( i2253[3], i2253[4] )
  i2252.m_ScreenMatchMode = i2253[5]
  i2252.m_MatchWidthOrHeight = i2253[6]
  i2252.m_PhysicalUnit = i2253[7]
  i2252.m_FallbackScreenDPI = i2253[8]
  i2252.m_DefaultSpriteDPI = i2253[9]
  i2252.m_DynamicPixelsPerUnit = i2253[10]
  i2252.m_PresetInfoIsWorld = !!i2253[11]
  return i2252
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2255 = data
  i2254.m_IgnoreReversedGraphics = !!i2255[0]
  i2254.m_BlockingObjects = i2255[1]
  i2254.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2255[2] )
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2257 = data
  i2256.cullTransparentMesh = !!i2257[0]
  return i2256
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.UI.Image' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'm_Sprite')
  i2258.m_Type = i2259[2]
  i2258.m_PreserveAspect = !!i2259[3]
  i2258.m_FillCenter = !!i2259[4]
  i2258.m_FillMethod = i2259[5]
  i2258.m_FillAmount = i2259[6]
  i2258.m_FillClockwise = !!i2259[7]
  i2258.m_FillOrigin = i2259[8]
  i2258.m_UseSpriteMesh = !!i2259[9]
  i2258.m_PixelsPerUnitMultiplier = i2259[10]
  request.r(i2259[11], i2259[12], 0, i2258, 'm_Material')
  i2258.m_Maskable = !!i2259[13]
  i2258.m_Color = new pc.Color(i2259[14], i2259[15], i2259[16], i2259[17])
  i2258.m_RaycastTarget = !!i2259[18]
  i2258.m_RaycastPadding = new pc.Vec4( i2259[19], i2259[20], i2259[21], i2259[22] )
  return i2258
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.Button' )
  var i2261 = data
  i2260.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2261[0], i2260.m_OnClick)
  i2260.m_Navigation = request.d('UnityEngine.UI.Navigation', i2261[1], i2260.m_Navigation)
  i2260.m_Transition = i2261[2]
  i2260.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2261[3], i2260.m_Colors)
  i2260.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2261[4], i2260.m_SpriteState)
  i2260.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2261[5], i2260.m_AnimationTriggers)
  i2260.m_Interactable = !!i2261[6]
  request.r(i2261[7], i2261[8], 0, i2260, 'm_TargetGraphic')
  return i2260
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2263 = data
  i2262.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2263[0], i2262.m_PersistentCalls)
  return i2262
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2265 = data
  var i2267 = i2265[0]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.add(request.d('UnityEngine.Events.PersistentCall', i2267[i + 0]));
  }
  i2264.m_Calls = i2266
  return i2264
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'm_Target')
  i2270.m_TargetAssemblyTypeName = i2271[2]
  i2270.m_MethodName = i2271[3]
  i2270.m_Mode = i2271[4]
  i2270.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2271[5], i2270.m_Arguments)
  i2270.m_CallState = i2271[6]
  return i2270
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'm_ObjectArgument')
  i2272.m_ObjectArgumentAssemblyTypeName = i2273[2]
  i2272.m_IntArgument = i2273[3]
  i2272.m_FloatArgument = i2273[4]
  i2272.m_StringArgument = i2273[5]
  i2272.m_BoolArgument = !!i2273[6]
  return i2272
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2275 = data
  i2274.m_Mode = i2275[0]
  i2274.m_WrapAround = !!i2275[1]
  request.r(i2275[2], i2275[3], 0, i2274, 'm_SelectOnUp')
  request.r(i2275[4], i2275[5], 0, i2274, 'm_SelectOnDown')
  request.r(i2275[6], i2275[7], 0, i2274, 'm_SelectOnLeft')
  request.r(i2275[8], i2275[9], 0, i2274, 'm_SelectOnRight')
  return i2274
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2277 = data
  i2276.m_NormalColor = new pc.Color(i2277[0], i2277[1], i2277[2], i2277[3])
  i2276.m_HighlightedColor = new pc.Color(i2277[4], i2277[5], i2277[6], i2277[7])
  i2276.m_PressedColor = new pc.Color(i2277[8], i2277[9], i2277[10], i2277[11])
  i2276.m_SelectedColor = new pc.Color(i2277[12], i2277[13], i2277[14], i2277[15])
  i2276.m_DisabledColor = new pc.Color(i2277[16], i2277[17], i2277[18], i2277[19])
  i2276.m_ColorMultiplier = i2277[20]
  i2276.m_FadeDuration = i2277[21]
  return i2276
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'm_HighlightedSprite')
  request.r(i2279[2], i2279[3], 0, i2278, 'm_PressedSprite')
  request.r(i2279[4], i2279[5], 0, i2278, 'm_SelectedSprite')
  request.r(i2279[6], i2279[7], 0, i2278, 'm_DisabledSprite')
  return i2278
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2281 = data
  i2280.m_NormalTrigger = i2281[0]
  i2280.m_HighlightedTrigger = i2281[1]
  i2280.m_PressedTrigger = i2281[2]
  i2280.m_SelectedTrigger = i2281[3]
  i2280.m_DisabledTrigger = i2281[4]
  return i2280
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2283 = data
  i2282.m_hasFontAssetChanged = !!i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'm_baseMaterial')
  i2282.m_maskOffset = new pc.Vec4( i2283[3], i2283[4], i2283[5], i2283[6] )
  i2282.m_text = i2283[7]
  i2282.m_isRightToLeft = !!i2283[8]
  request.r(i2283[9], i2283[10], 0, i2282, 'm_fontAsset')
  request.r(i2283[11], i2283[12], 0, i2282, 'm_sharedMaterial')
  var i2285 = i2283[13]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 2, i2284, '')
  }
  i2282.m_fontSharedMaterials = i2284
  request.r(i2283[14], i2283[15], 0, i2282, 'm_fontMaterial')
  var i2287 = i2283[16]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2282.m_fontMaterials = i2286
  i2282.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2283[17], i2283[18], i2283[19], i2283[20])
  i2282.m_fontColor = new pc.Color(i2283[21], i2283[22], i2283[23], i2283[24])
  i2282.m_enableVertexGradient = !!i2283[25]
  i2282.m_colorMode = i2283[26]
  i2282.m_fontColorGradient = request.d('TMPro.VertexGradient', i2283[27], i2282.m_fontColorGradient)
  request.r(i2283[28], i2283[29], 0, i2282, 'm_fontColorGradientPreset')
  request.r(i2283[30], i2283[31], 0, i2282, 'm_spriteAsset')
  i2282.m_tintAllSprites = !!i2283[32]
  request.r(i2283[33], i2283[34], 0, i2282, 'm_StyleSheet')
  i2282.m_TextStyleHashCode = i2283[35]
  i2282.m_overrideHtmlColors = !!i2283[36]
  i2282.m_faceColor = UnityEngine.Color32.ConstructColor(i2283[37], i2283[38], i2283[39], i2283[40])
  i2282.m_fontSize = i2283[41]
  i2282.m_fontSizeBase = i2283[42]
  i2282.m_fontWeight = i2283[43]
  i2282.m_enableAutoSizing = !!i2283[44]
  i2282.m_fontSizeMin = i2283[45]
  i2282.m_fontSizeMax = i2283[46]
  i2282.m_fontStyle = i2283[47]
  i2282.m_HorizontalAlignment = i2283[48]
  i2282.m_VerticalAlignment = i2283[49]
  i2282.m_textAlignment = i2283[50]
  i2282.m_characterSpacing = i2283[51]
  i2282.m_wordSpacing = i2283[52]
  i2282.m_lineSpacing = i2283[53]
  i2282.m_lineSpacingMax = i2283[54]
  i2282.m_paragraphSpacing = i2283[55]
  i2282.m_charWidthMaxAdj = i2283[56]
  i2282.m_enableWordWrapping = !!i2283[57]
  i2282.m_wordWrappingRatios = i2283[58]
  i2282.m_overflowMode = i2283[59]
  request.r(i2283[60], i2283[61], 0, i2282, 'm_linkedTextComponent')
  request.r(i2283[62], i2283[63], 0, i2282, 'parentLinkedComponent')
  i2282.m_enableKerning = !!i2283[64]
  i2282.m_enableExtraPadding = !!i2283[65]
  i2282.checkPaddingRequired = !!i2283[66]
  i2282.m_isRichText = !!i2283[67]
  i2282.m_parseCtrlCharacters = !!i2283[68]
  i2282.m_isOrthographic = !!i2283[69]
  i2282.m_isCullingEnabled = !!i2283[70]
  i2282.m_horizontalMapping = i2283[71]
  i2282.m_verticalMapping = i2283[72]
  i2282.m_uvLineOffset = i2283[73]
  i2282.m_geometrySortingOrder = i2283[74]
  i2282.m_IsTextObjectScaleStatic = !!i2283[75]
  i2282.m_VertexBufferAutoSizeReduction = !!i2283[76]
  i2282.m_useMaxVisibleDescender = !!i2283[77]
  i2282.m_pageToDisplay = i2283[78]
  i2282.m_margin = new pc.Vec4( i2283[79], i2283[80], i2283[81], i2283[82] )
  i2282.m_isUsingLegacyAnimationComponent = !!i2283[83]
  i2282.m_isVolumetricText = !!i2283[84]
  request.r(i2283[85], i2283[86], 0, i2282, 'm_Material')
  i2282.m_Maskable = !!i2283[87]
  i2282.m_Color = new pc.Color(i2283[88], i2283[89], i2283[90], i2283[91])
  i2282.m_RaycastTarget = !!i2283[92]
  i2282.m_RaycastPadding = new pc.Vec4( i2283[93], i2283[94], i2283[95], i2283[96] )
  return i2282
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2288 = root || request.c( 'TMPro.VertexGradient' )
  var i2289 = data
  i2288.topLeft = new pc.Color(i2289[0], i2289[1], i2289[2], i2289[3])
  i2288.topRight = new pc.Color(i2289[4], i2289[5], i2289[6], i2289[7])
  i2288.bottomLeft = new pc.Color(i2289[8], i2289[9], i2289[10], i2289[11])
  i2288.bottomRight = new pc.Color(i2289[12], i2289[13], i2289[14], i2289[15])
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.type = i2291[1]
  i2290.color = new pc.Color(i2291[2], i2291[3], i2291[4], i2291[5])
  i2290.cullingMask = i2291[6]
  i2290.intensity = i2291[7]
  i2290.range = i2291[8]
  i2290.spotAngle = i2291[9]
  i2290.shadows = i2291[10]
  i2290.shadowNormalBias = i2291[11]
  i2290.shadowBias = i2291[12]
  i2290.shadowStrength = i2291[13]
  i2290.shadowResolution = i2291[14]
  i2290.lightmapBakeType = i2291[15]
  i2290.renderMode = i2291[16]
  request.r(i2291[17], i2291[18], 0, i2290, 'cookie')
  i2290.cookieSize = i2291[19]
  return i2290
}

Deserializers["CardLayer"] = function (request, data, root) {
  var i2292 = root || request.c( 'CardLayer' )
  var i2293 = data
  i2292.myTurn = !!i2293[0]
  request.r(i2293[1], i2293[2], 0, i2292, 'cardPool')
  request.r(i2293[3], i2293[4], 0, i2292, 'handController')
  request.r(i2293[5], i2293[6], 0, i2292, 'deckController')
  request.r(i2293[7], i2293[8], 0, i2292, 'throwController')
  request.r(i2293[9], i2293[10], 0, i2292, 'dragController')
  request.r(i2293[11], i2293[12], 0, i2292, 'opponentController')
  i2292._opponentPlayCounter = i2293[13]
  var i2295 = i2293[14]
  var i2294 = new (System.Collections.Generic.List$1(Bridge.ns('CardLayer+OpponentPlay')))
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.add(request.d('CardLayer+OpponentPlay', i2295[i + 0]));
  }
  i2292.opponentPlayList = i2294
  var i2297 = i2293[15]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.add(i2297[i + 0]);
  }
  i2292.discardCardNoList = i2296
  var i2299 = i2293[16]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.add(i2299[i + 0]);
  }
  i2292.handStartCardNoList = i2298
  i2292.cardsStartCount = i2293[17]
  var i2301 = i2293[18]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(i2301[i + 0]);
  }
  i2292.deckCardNoList = i2300
  var i2303 = i2293[19]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(i2303[i + 0]);
  }
  i2292.opponentThrowCardNoList = i2302
  return i2292
}

Deserializers["CardLayer+OpponentPlay"] = function (request, data, root) {
  var i2306 = root || request.c( 'CardLayer+OpponentPlay' )
  var i2307 = data
  i2306.move = i2307[0]
  i2306.pickDelay = i2307[1]
  i2306.throwDelay = i2307[2]
  return i2306
}

Deserializers["CardPool"] = function (request, data, root) {
  var i2310 = root || request.c( 'CardPool' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'cardPrefab')
  return i2310
}

Deserializers["HandController"] = function (request, data, root) {
  var i2312 = root || request.c( 'HandController' )
  var i2313 = data
  i2312.sortingOrderMultiplier = i2313[0]
  request.r(i2313[1], i2313[2], 0, i2312, 'slotPrefab')
  var i2315 = i2313[3]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2315.length; i += 2) {
  request.r(i2315[i + 0], i2315[i + 1], 1, i2314, '')
  }
  i2312.slotsPool = i2314
  i2312.duration = i2313[4]
  i2312.ease = i2313[5]
  return i2312
}

Deserializers["HandSlotArc"] = function (request, data, root) {
  var i2318 = root || request.c( 'HandSlotArc' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'handSettingsSo')
  return i2318
}

Deserializers["DragController"] = function (request, data, root) {
  var i2320 = root || request.c( 'DragController' )
  var i2321 = data
  i2320.lastPickedCardFromThrowZoneNo = i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'draggingCard')
  i2320.fullDisable = !!i2321[3]
  i2320.canFreeControl = !!i2321[4]
  i2320.canPickCardFromDeck = !!i2321[5]
  i2320.canPickCardFromThrow = !!i2321[6]
  i2320.canThrowCard = !!i2321[7]
  request.r(i2321[8], i2321[9], 0, i2320, 'gameCamera')
  i2320.planeMask = UnityEngine.LayerMask.FromIntegerValue( i2321[10] )
  i2320.cardMask = UnityEngine.LayerMask.FromIntegerValue( i2321[11] )
  request.r(i2321[12], i2321[13], 0, i2320, 'slot')
  request.r(i2321[14], i2321[15], 0, i2320, 'handEdge')
  return i2320
}

Deserializers["ThrowController"] = function (request, data, root) {
  var i2322 = root || request.c( 'ThrowController' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'slotPrefab')
  i2322.offset = new pc.Vec3( i2323[2], i2323[3], i2323[4] )
  i2322.duration = i2323[5]
  i2322.ease = i2323[6]
  i2322.sortingOrderMultiplier = i2323[7]
  var i2325 = i2323[8]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 1, i2324, '')
  }
  i2322.slotPool = i2324
  return i2322
}

Deserializers["DeckController"] = function (request, data, root) {
  var i2326 = root || request.c( 'DeckController' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'slotPrefab')
  i2326.offset = new pc.Vec3( i2327[2], i2327[3], i2327[4] )
  i2326.sortingOrderMultiplier = i2327[5]
  var i2329 = i2327[6]
  var i2328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 1, i2328, '')
  }
  i2326.slotPool = i2328
  return i2326
}

Deserializers["OpponentController"] = function (request, data, root) {
  var i2330 = root || request.c( 'OpponentController' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'slotPrefab')
  i2330.duration = i2331[2]
  i2330.ease = i2331[3]
  i2330.sortingOrderMultiplier = i2331[4]
  var i2333 = i2331[5]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 1, i2332, '')
  }
  i2330.slotPool = i2332
  return i2330
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'm_FirstSelected')
  i2334.m_sendNavigationEvents = !!i2335[2]
  i2334.m_DragThreshold = i2335[3]
  return i2334
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2337 = data
  i2336.m_HorizontalAxis = i2337[0]
  i2336.m_VerticalAxis = i2337[1]
  i2336.m_SubmitButton = i2337[2]
  i2336.m_CancelButton = i2337[3]
  i2336.m_InputActionsPerSecond = i2337[4]
  i2336.m_RepeatDelay = i2337[5]
  i2336.m_ForceModuleActive = !!i2337[6]
  i2336.m_SendPointerHoverToParent = !!i2337[7]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2339 = data
  i2338.ambientIntensity = i2339[0]
  i2338.reflectionIntensity = i2339[1]
  i2338.ambientMode = i2339[2]
  i2338.ambientLight = new pc.Color(i2339[3], i2339[4], i2339[5], i2339[6])
  i2338.ambientSkyColor = new pc.Color(i2339[7], i2339[8], i2339[9], i2339[10])
  i2338.ambientGroundColor = new pc.Color(i2339[11], i2339[12], i2339[13], i2339[14])
  i2338.ambientEquatorColor = new pc.Color(i2339[15], i2339[16], i2339[17], i2339[18])
  i2338.fogColor = new pc.Color(i2339[19], i2339[20], i2339[21], i2339[22])
  i2338.fogEndDistance = i2339[23]
  i2338.fogStartDistance = i2339[24]
  i2338.fogDensity = i2339[25]
  i2338.fog = !!i2339[26]
  request.r(i2339[27], i2339[28], 0, i2338, 'skybox')
  i2338.fogMode = i2339[29]
  var i2341 = i2339[30]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2341[i + 0]) );
  }
  i2338.lightmaps = i2340
  i2338.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2339[31], i2338.lightProbes)
  i2338.lightmapsMode = i2339[32]
  i2338.mixedBakeMode = i2339[33]
  i2338.environmentLightingMode = i2339[34]
  i2338.ambientProbe = new pc.SphericalHarmonicsL2(i2339[35])
  i2338.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2339[36])
  i2338.useReferenceAmbientProbe = !!i2339[37]
  request.r(i2339[38], i2339[39], 0, i2338, 'customReflection')
  request.r(i2339[40], i2339[41], 0, i2338, 'defaultReflection')
  i2338.defaultReflectionMode = i2339[42]
  i2338.defaultReflectionResolution = i2339[43]
  i2338.sunLightObjectId = i2339[44]
  i2338.pixelLightCount = i2339[45]
  i2338.defaultReflectionHDR = !!i2339[46]
  i2338.hasLightDataAsset = !!i2339[47]
  i2338.hasManualGenerate = !!i2339[48]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'lightmapColor')
  request.r(i2345[2], i2345[3], 0, i2344, 'lightmapDirection')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2346 = root || new UnityEngine.LightProbes()
  var i2347 = data
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2355 = data
  var i2357 = i2355[0]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2357[i + 0]));
  }
  i2354.ShaderCompilationErrors = i2356
  i2354.name = i2355[1]
  i2354.guid = i2355[2]
  var i2359 = i2355[3]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( i2359[i + 0] );
  }
  i2354.shaderDefinedKeywords = i2358
  var i2361 = i2355[4]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2361[i + 0]) );
  }
  i2354.passes = i2360
  var i2363 = i2355[5]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2363[i + 0]) );
  }
  i2354.usePasses = i2362
  var i2365 = i2355[6]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2365[i + 0]) );
  }
  i2354.defaultParameterValues = i2364
  request.r(i2355[7], i2355[8], 0, i2354, 'unityFallbackShader')
  i2354.readDepth = !!i2355[9]
  i2354.isCreatedByShaderGraph = !!i2355[10]
  i2354.compiled = !!i2355[11]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2369 = data
  i2368.shaderName = i2369[0]
  i2368.errorMessage = i2369[1]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2374 = root || new pc.UnityShaderPass()
  var i2375 = data
  i2374.id = i2375[0]
  i2374.subShaderIndex = i2375[1]
  i2374.name = i2375[2]
  i2374.passType = i2375[3]
  i2374.grabPassTextureName = i2375[4]
  i2374.usePass = !!i2375[5]
  i2374.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[6], i2374.zTest)
  i2374.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[7], i2374.zWrite)
  i2374.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[8], i2374.culling)
  i2374.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2375[9], i2374.blending)
  i2374.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2375[10], i2374.alphaBlending)
  i2374.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[11], i2374.colorWriteMask)
  i2374.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[12], i2374.offsetUnits)
  i2374.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[13], i2374.offsetFactor)
  i2374.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[14], i2374.stencilRef)
  i2374.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[15], i2374.stencilReadMask)
  i2374.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[16], i2374.stencilWriteMask)
  i2374.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2375[17], i2374.stencilOp)
  i2374.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2375[18], i2374.stencilOpFront)
  i2374.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2375[19], i2374.stencilOpBack)
  var i2377 = i2375[20]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2377[i + 0]) );
  }
  i2374.tags = i2376
  var i2379 = i2375[21]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( i2379[i + 0] );
  }
  i2374.passDefinedKeywords = i2378
  var i2381 = i2375[22]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2381[i + 0]) );
  }
  i2374.passDefinedKeywordGroups = i2380
  var i2383 = i2375[23]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2383[i + 0]) );
  }
  i2374.variants = i2382
  var i2385 = i2375[24]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2385[i + 0]) );
  }
  i2374.excludedVariants = i2384
  i2374.hasDepthReader = !!i2375[25]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2387 = data
  i2386.val = i2387[0]
  i2386.name = i2387[1]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2389 = data
  i2388.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2389[0], i2388.src)
  i2388.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2389[1], i2388.dst)
  i2388.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2389[2], i2388.op)
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2391 = data
  i2390.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[0], i2390.pass)
  i2390.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[1], i2390.fail)
  i2390.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[2], i2390.zFail)
  i2390.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[3], i2390.comp)
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2395 = data
  i2394.name = i2395[0]
  i2394.value = i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( i2401[i + 0] );
  }
  i2398.keywords = i2400
  i2398.hasDiscard = !!i2399[1]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2405 = data
  i2404.passId = i2405[0]
  i2404.subShaderIndex = i2405[1]
  var i2407 = i2405[2]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( i2407[i + 0] );
  }
  i2404.keywords = i2406
  i2404.vertexProgram = i2405[3]
  i2404.fragmentProgram = i2405[4]
  i2404.exportedForWebGl2 = !!i2405[5]
  i2404.readDepth = !!i2405[6]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'shader')
  i2410.pass = i2411[2]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2415 = data
  i2414.name = i2415[0]
  i2414.type = i2415[1]
  i2414.value = new pc.Vec4( i2415[2], i2415[3], i2415[4], i2415[5] )
  i2414.textureValue = i2415[6]
  i2414.shaderPropertyFlag = i2415[7]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2417 = data
  i2416.name = i2417[0]
  request.r(i2417[1], i2417[2], 0, i2416, 'texture')
  i2416.aabb = i2417[3]
  i2416.vertices = i2417[4]
  i2416.triangles = i2417[5]
  i2416.textureRect = UnityEngine.Rect.MinMaxRect(i2417[6], i2417[7], i2417[8], i2417[9])
  i2416.packedRect = UnityEngine.Rect.MinMaxRect(i2417[10], i2417[11], i2417[12], i2417[13])
  i2416.border = new pc.Vec4( i2417[14], i2417[15], i2417[16], i2417[17] )
  i2416.transparency = i2417[18]
  i2416.bounds = i2417[19]
  i2416.pixelsPerUnit = i2417[20]
  i2416.textureWidth = i2417[21]
  i2416.textureHeight = i2417[22]
  i2416.nativeSize = new pc.Vec2( i2417[23], i2417[24] )
  i2416.pivot = new pc.Vec2( i2417[25], i2417[26] )
  i2416.textureRectOffset = new pc.Vec2( i2417[27], i2417[28] )
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2419 = data
  i2418.name = i2419[0]
  i2418.ascent = i2419[1]
  i2418.originalLineHeight = i2419[2]
  i2418.fontSize = i2419[3]
  var i2421 = i2419[4]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2421[i + 0]) );
  }
  i2418.characterInfo = i2420
  request.r(i2419[5], i2419[6], 0, i2418, 'texture')
  i2418.originalFontSize = i2419[7]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2425 = data
  i2424.index = i2425[0]
  i2424.advance = i2425[1]
  i2424.bearing = i2425[2]
  i2424.glyphWidth = i2425[3]
  i2424.glyphHeight = i2425[4]
  i2424.minX = i2425[5]
  i2424.maxX = i2425[6]
  i2424.minY = i2425[7]
  i2424.maxY = i2425[8]
  i2424.uvBottomLeftX = i2425[9]
  i2424.uvBottomLeftY = i2425[10]
  i2424.uvBottomRightX = i2425[11]
  i2424.uvBottomRightY = i2425[12]
  i2424.uvTopLeftX = i2425[13]
  i2424.uvTopLeftY = i2425[14]
  i2424.uvTopRightX = i2425[15]
  i2424.uvTopRightY = i2425[16]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.bytes64 = i2427[1]
  i2426.data = i2427[2]
  return i2426
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2429 = data
  i2428.hashCode = i2429[0]
  request.r(i2429[1], i2429[2], 0, i2428, 'material')
  i2428.materialHashCode = i2429[3]
  request.r(i2429[4], i2429[5], 0, i2428, 'atlas')
  i2428.normalStyle = i2429[6]
  i2428.normalSpacingOffset = i2429[7]
  i2428.boldStyle = i2429[8]
  i2428.boldSpacing = i2429[9]
  i2428.italicStyle = i2429[10]
  i2428.tabSize = i2429[11]
  i2428.m_Version = i2429[12]
  i2428.m_SourceFontFileGUID = i2429[13]
  request.r(i2429[14], i2429[15], 0, i2428, 'm_SourceFontFile_EditorRef')
  request.r(i2429[16], i2429[17], 0, i2428, 'm_SourceFontFile')
  i2428.m_AtlasPopulationMode = i2429[18]
  i2428.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2429[19], i2428.m_FaceInfo)
  var i2431 = i2429[20]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.add(request.d('UnityEngine.TextCore.Glyph', i2431[i + 0]));
  }
  i2428.m_GlyphTable = i2430
  var i2433 = i2429[21]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('TMPro.TMP_Character', i2433[i + 0]));
  }
  i2428.m_CharacterTable = i2432
  var i2435 = i2429[22]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2428.m_AtlasTextures = i2434
  i2428.m_AtlasTextureIndex = i2429[23]
  i2428.m_IsMultiAtlasTexturesEnabled = !!i2429[24]
  i2428.m_ClearDynamicDataOnBuild = !!i2429[25]
  var i2437 = i2429[26]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.add(request.d('UnityEngine.TextCore.GlyphRect', i2437[i + 0]));
  }
  i2428.m_UsedGlyphRects = i2436
  var i2439 = i2429[27]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.add(request.d('UnityEngine.TextCore.GlyphRect', i2439[i + 0]));
  }
  i2428.m_FreeGlyphRects = i2438
  i2428.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2429[28], i2428.m_fontInfo)
  i2428.m_AtlasWidth = i2429[29]
  i2428.m_AtlasHeight = i2429[30]
  i2428.m_AtlasPadding = i2429[31]
  i2428.m_AtlasRenderMode = i2429[32]
  var i2441 = i2429[33]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(request.d('TMPro.TMP_Glyph', i2441[i + 0]));
  }
  i2428.m_glyphInfoList = i2440
  i2428.m_KerningTable = request.d('TMPro.KerningTable', i2429[34], i2428.m_KerningTable)
  i2428.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2429[35], i2428.m_FontFeatureTable)
  var i2443 = i2429[36]
  var i2442 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 1, i2442, '')
  }
  i2428.fallbackFontAssets = i2442
  var i2445 = i2429[37]
  var i2444 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 1, i2444, '')
  }
  i2428.m_FallbackFontAssetTable = i2444
  i2428.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2429[38], i2428.m_CreationSettings)
  var i2447 = i2429[39]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('TMPro.TMP_FontWeightPair', i2447[i + 0]) );
  }
  i2428.m_FontWeightTable = i2446
  var i2449 = i2429[40]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('TMPro.TMP_FontWeightPair', i2449[i + 0]) );
  }
  i2428.fontWeights = i2448
  return i2428
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2451 = data
  i2450.m_FaceIndex = i2451[0]
  i2450.m_FamilyName = i2451[1]
  i2450.m_StyleName = i2451[2]
  i2450.m_PointSize = i2451[3]
  i2450.m_Scale = i2451[4]
  i2450.m_UnitsPerEM = i2451[5]
  i2450.m_LineHeight = i2451[6]
  i2450.m_AscentLine = i2451[7]
  i2450.m_CapLine = i2451[8]
  i2450.m_MeanLine = i2451[9]
  i2450.m_Baseline = i2451[10]
  i2450.m_DescentLine = i2451[11]
  i2450.m_SuperscriptOffset = i2451[12]
  i2450.m_SuperscriptSize = i2451[13]
  i2450.m_SubscriptOffset = i2451[14]
  i2450.m_SubscriptSize = i2451[15]
  i2450.m_UnderlineOffset = i2451[16]
  i2450.m_UnderlineThickness = i2451[17]
  i2450.m_StrikethroughOffset = i2451[18]
  i2450.m_StrikethroughThickness = i2451[19]
  i2450.m_TabWidth = i2451[20]
  return i2450
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2455 = data
  i2454.m_Index = i2455[0]
  i2454.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2455[1], i2454.m_Metrics)
  i2454.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2455[2], i2454.m_GlyphRect)
  i2454.m_Scale = i2455[3]
  i2454.m_AtlasIndex = i2455[4]
  i2454.m_ClassDefinitionType = i2455[5]
  return i2454
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2457 = data
  i2456.m_Width = i2457[0]
  i2456.m_Height = i2457[1]
  i2456.m_HorizontalBearingX = i2457[2]
  i2456.m_HorizontalBearingY = i2457[3]
  i2456.m_HorizontalAdvance = i2457[4]
  return i2456
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2459 = data
  i2458.m_X = i2459[0]
  i2458.m_Y = i2459[1]
  i2458.m_Width = i2459[2]
  i2458.m_Height = i2459[3]
  return i2458
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.TMP_Character' )
  var i2463 = data
  i2462.m_ElementType = i2463[0]
  i2462.m_Unicode = i2463[1]
  i2462.m_GlyphIndex = i2463[2]
  i2462.m_Scale = i2463[3]
  return i2462
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2469 = data
  i2468.Name = i2469[0]
  i2468.PointSize = i2469[1]
  i2468.Scale = i2469[2]
  i2468.CharacterCount = i2469[3]
  i2468.LineHeight = i2469[4]
  i2468.Baseline = i2469[5]
  i2468.Ascender = i2469[6]
  i2468.CapHeight = i2469[7]
  i2468.Descender = i2469[8]
  i2468.CenterLine = i2469[9]
  i2468.SuperscriptOffset = i2469[10]
  i2468.SubscriptOffset = i2469[11]
  i2468.SubSize = i2469[12]
  i2468.Underline = i2469[13]
  i2468.UnderlineThickness = i2469[14]
  i2468.strikethrough = i2469[15]
  i2468.strikethroughThickness = i2469[16]
  i2468.TabWidth = i2469[17]
  i2468.Padding = i2469[18]
  i2468.AtlasWidth = i2469[19]
  i2468.AtlasHeight = i2469[20]
  return i2468
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2472 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2473 = data
  i2472.id = i2473[0]
  i2472.x = i2473[1]
  i2472.y = i2473[2]
  i2472.width = i2473[3]
  i2472.height = i2473[4]
  i2472.xOffset = i2473[5]
  i2472.yOffset = i2473[6]
  i2472.xAdvance = i2473[7]
  i2472.scale = i2473[8]
  return i2472
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.KerningTable' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.add(request.d('TMPro.KerningPair', i2477[i + 0]));
  }
  i2474.kerningPairs = i2476
  return i2474
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2480 = root || request.c( 'TMPro.KerningPair' )
  var i2481 = data
  i2480.xOffset = i2481[0]
  i2480.m_FirstGlyph = i2481[1]
  i2480.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2481[2], i2480.m_FirstGlyphAdjustments)
  i2480.m_SecondGlyph = i2481[3]
  i2480.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2481[4], i2480.m_SecondGlyphAdjustments)
  i2480.m_IgnoreSpacingAdjustments = !!i2481[5]
  return i2480
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2483 = data
  var i2485 = i2483[0]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2485[i + 0]));
  }
  i2482.m_GlyphPairAdjustmentRecords = i2484
  return i2482
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2488 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2489 = data
  i2488.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2489[0], i2488.m_FirstAdjustmentRecord)
  i2488.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2489[1], i2488.m_SecondAdjustmentRecord)
  i2488.m_FeatureLookupFlags = i2489[2]
  return i2488
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2491 = data
  i2490.m_GlyphIndex = i2491[0]
  i2490.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2491[1], i2490.m_GlyphValueRecord)
  return i2490
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2492 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2493 = data
  i2492.m_XPlacement = i2493[0]
  i2492.m_YPlacement = i2493[1]
  i2492.m_XAdvance = i2493[2]
  i2492.m_YAdvance = i2493[3]
  return i2492
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2496 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2497 = data
  i2496.sourceFontFileName = i2497[0]
  i2496.sourceFontFileGUID = i2497[1]
  i2496.pointSizeSamplingMode = i2497[2]
  i2496.pointSize = i2497[3]
  i2496.padding = i2497[4]
  i2496.packingMode = i2497[5]
  i2496.atlasWidth = i2497[6]
  i2496.atlasHeight = i2497[7]
  i2496.characterSetSelectionMode = i2497[8]
  i2496.characterSequence = i2497[9]
  i2496.referencedFontAssetGUID = i2497[10]
  i2496.referencedTextAssetGUID = i2497[11]
  i2496.fontStyle = i2497[12]
  i2496.fontStyleModifier = i2497[13]
  i2496.renderMode = i2497[14]
  i2496.includeFontFeatures = !!i2497[15]
  return i2496
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2500 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'regularTypeface')
  request.r(i2501[2], i2501[3], 0, i2500, 'italicTypeface')
  return i2500
}

Deserializers["HandSettingsSO"] = function (request, data, root) {
  var i2502 = root || request.c( 'HandSettingsSO' )
  var i2503 = data
  i2502.handHeight = i2503[0]
  i2502.handWidth = i2503[1]
  i2502.maxCardAngle = i2503[2]
  i2502.yPerCard = i2503[3]
  i2502.zDistance = i2503[4]
  i2502.handY = i2503[5]
  i2502.handZ = i2503[6]
  return i2502
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2504 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2505 = data
  i2504.useSafeMode = !!i2505[0]
  i2504.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2505[1], i2504.safeModeOptions)
  i2504.timeScale = i2505[2]
  i2504.unscaledTimeScale = i2505[3]
  i2504.useSmoothDeltaTime = !!i2505[4]
  i2504.maxSmoothUnscaledTime = i2505[5]
  i2504.rewindCallbackMode = i2505[6]
  i2504.showUnityEditorReport = !!i2505[7]
  i2504.logBehaviour = i2505[8]
  i2504.drawGizmos = !!i2505[9]
  i2504.defaultRecyclable = !!i2505[10]
  i2504.defaultAutoPlay = i2505[11]
  i2504.defaultUpdateType = i2505[12]
  i2504.defaultTimeScaleIndependent = !!i2505[13]
  i2504.defaultEaseType = i2505[14]
  i2504.defaultEaseOvershootOrAmplitude = i2505[15]
  i2504.defaultEasePeriod = i2505[16]
  i2504.defaultAutoKill = !!i2505[17]
  i2504.defaultLoopType = i2505[18]
  i2504.debugMode = !!i2505[19]
  i2504.debugStoreTargetId = !!i2505[20]
  i2504.showPreviewPanel = !!i2505[21]
  i2504.storeSettingsLocation = i2505[22]
  i2504.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2505[23], i2504.modules)
  i2504.createASMDEF = !!i2505[24]
  i2504.showPlayingTweens = !!i2505[25]
  i2504.showPausedTweens = !!i2505[26]
  return i2504
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2507 = data
  i2506.logBehaviour = i2507[0]
  i2506.nestedTweenFailureBehaviour = i2507[1]
  return i2506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2509 = data
  i2508.showPanel = !!i2509[0]
  i2508.audioEnabled = !!i2509[1]
  i2508.physicsEnabled = !!i2509[2]
  i2508.physics2DEnabled = !!i2509[3]
  i2508.spriteEnabled = !!i2509[4]
  i2508.uiEnabled = !!i2509[5]
  i2508.textMeshProEnabled = !!i2509[6]
  i2508.tk2DEnabled = !!i2509[7]
  i2508.deAudioEnabled = !!i2509[8]
  i2508.deUnityExtendedEnabled = !!i2509[9]
  i2508.epoOutlineEnabled = !!i2509[10]
  return i2508
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.TMP_Settings' )
  var i2511 = data
  i2510.m_enableWordWrapping = !!i2511[0]
  i2510.m_enableKerning = !!i2511[1]
  i2510.m_enableExtraPadding = !!i2511[2]
  i2510.m_enableTintAllSprites = !!i2511[3]
  i2510.m_enableParseEscapeCharacters = !!i2511[4]
  i2510.m_EnableRaycastTarget = !!i2511[5]
  i2510.m_GetFontFeaturesAtRuntime = !!i2511[6]
  i2510.m_missingGlyphCharacter = i2511[7]
  i2510.m_warningsDisabled = !!i2511[8]
  request.r(i2511[9], i2511[10], 0, i2510, 'm_defaultFontAsset')
  i2510.m_defaultFontAssetPath = i2511[11]
  i2510.m_defaultFontSize = i2511[12]
  i2510.m_defaultAutoSizeMinRatio = i2511[13]
  i2510.m_defaultAutoSizeMaxRatio = i2511[14]
  i2510.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2511[15], i2511[16] )
  i2510.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2511[17], i2511[18] )
  i2510.m_autoSizeTextContainer = !!i2511[19]
  i2510.m_IsTextObjectScaleStatic = !!i2511[20]
  var i2513 = i2511[21]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2513.length; i += 2) {
  request.r(i2513[i + 0], i2513[i + 1], 1, i2512, '')
  }
  i2510.m_fallbackFontAssets = i2512
  i2510.m_matchMaterialPreset = !!i2511[22]
  request.r(i2511[23], i2511[24], 0, i2510, 'm_defaultSpriteAsset')
  i2510.m_defaultSpriteAssetPath = i2511[25]
  i2510.m_enableEmojiSupport = !!i2511[26]
  i2510.m_MissingCharacterSpriteUnicode = i2511[27]
  i2510.m_defaultColorGradientPresetsPath = i2511[28]
  request.r(i2511[29], i2511[30], 0, i2510, 'm_defaultStyleSheet')
  i2510.m_StyleSheetsResourcePath = i2511[31]
  request.r(i2511[32], i2511[33], 0, i2510, 'm_leadingCharacters')
  request.r(i2511[34], i2511[35], 0, i2510, 'm_followingCharacters')
  i2510.m_UseModernHangulLineBreakingRules = !!i2511[36]
  return i2510
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2514 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2515 = data
  i2514.hashCode = i2515[0]
  request.r(i2515[1], i2515[2], 0, i2514, 'material')
  i2514.materialHashCode = i2515[3]
  request.r(i2515[4], i2515[5], 0, i2514, 'spriteSheet')
  var i2517 = i2515[6]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.add(request.d('TMPro.TMP_Sprite', i2517[i + 0]));
  }
  i2514.spriteInfoList = i2516
  var i2519 = i2515[7]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 1, i2518, '')
  }
  i2514.fallbackSpriteAssets = i2518
  i2514.m_Version = i2515[8]
  i2514.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2515[9], i2514.m_FaceInfo)
  var i2521 = i2515[10]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('TMPro.TMP_SpriteCharacter', i2521[i + 0]));
  }
  i2514.m_SpriteCharacterTable = i2520
  var i2523 = i2515[11]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.add(request.d('TMPro.TMP_SpriteGlyph', i2523[i + 0]));
  }
  i2514.m_SpriteGlyphTable = i2522
  return i2514
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2526 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2527 = data
  i2526.name = i2527[0]
  i2526.hashCode = i2527[1]
  i2526.unicode = i2527[2]
  i2526.pivot = new pc.Vec2( i2527[3], i2527[4] )
  request.r(i2527[5], i2527[6], 0, i2526, 'sprite')
  i2526.id = i2527[7]
  i2526.x = i2527[8]
  i2526.y = i2527[9]
  i2526.width = i2527[10]
  i2526.height = i2527[11]
  i2526.xOffset = i2527[12]
  i2526.yOffset = i2527[13]
  i2526.xAdvance = i2527[14]
  i2526.scale = i2527[15]
  return i2526
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2532 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2533 = data
  i2532.m_Name = i2533[0]
  i2532.m_HashCode = i2533[1]
  i2532.m_ElementType = i2533[2]
  i2532.m_Unicode = i2533[3]
  i2532.m_GlyphIndex = i2533[4]
  i2532.m_Scale = i2533[5]
  return i2532
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2536 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'sprite')
  i2536.m_Index = i2537[2]
  i2536.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2537[3], i2536.m_Metrics)
  i2536.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2537[4], i2536.m_GlyphRect)
  i2536.m_Scale = i2537[5]
  i2536.m_AtlasIndex = i2537[6]
  i2536.m_ClassDefinitionType = i2537[7]
  return i2536
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2539 = data
  var i2541 = i2539[0]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.add(request.d('TMPro.TMP_Style', i2541[i + 0]));
  }
  i2538.m_StyleList = i2540
  return i2538
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2544 = root || request.c( 'TMPro.TMP_Style' )
  var i2545 = data
  i2544.m_Name = i2545[0]
  i2544.m_HashCode = i2545[1]
  i2544.m_OpeningDefinition = i2545[2]
  i2544.m_ClosingDefinition = i2545[3]
  i2544.m_OpeningTagArray = i2545[4]
  i2544.m_ClosingTagArray = i2545[5]
  i2544.m_OpeningTagUnicodeArray = i2545[6]
  i2544.m_ClosingTagUnicodeArray = i2545[7]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2549[i + 0]) );
  }
  i2546.files = i2548
  i2546.componentToPrefabIds = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2553 = data
  i2552.path = i2553[0]
  request.r(i2553[1], i2553[2], 0, i2552, 'unityObject')
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2557[i + 0]) );
  }
  i2554.scriptsExecutionOrder = i2556
  var i2559 = i2555[1]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2559[i + 0]) );
  }
  i2554.sortingLayers = i2558
  var i2561 = i2555[2]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2561[i + 0]) );
  }
  i2554.cullingLayers = i2560
  i2554.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2555[3], i2554.timeSettings)
  i2554.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2555[4], i2554.physicsSettings)
  i2554.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2555[5], i2554.physics2DSettings)
  i2554.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2555[6], i2554.qualitySettings)
  i2554.enableRealtimeShadows = !!i2555[7]
  i2554.enableAutoInstancing = !!i2555[8]
  i2554.enableDynamicBatching = !!i2555[9]
  i2554.lightmapEncodingQuality = i2555[10]
  i2554.desiredColorSpace = i2555[11]
  var i2563 = i2555[12]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2554.allTags = i2562
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.value = i2567[1]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2571 = data
  i2570.id = i2571[0]
  i2570.name = i2571[1]
  i2570.value = i2571[2]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2575 = data
  i2574.id = i2575[0]
  i2574.name = i2575[1]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2577 = data
  i2576.fixedDeltaTime = i2577[0]
  i2576.maximumDeltaTime = i2577[1]
  i2576.timeScale = i2577[2]
  i2576.maximumParticleTimestep = i2577[3]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2579 = data
  i2578.gravity = new pc.Vec3( i2579[0], i2579[1], i2579[2] )
  i2578.defaultSolverIterations = i2579[3]
  i2578.bounceThreshold = i2579[4]
  i2578.autoSyncTransforms = !!i2579[5]
  i2578.autoSimulation = !!i2579[6]
  var i2581 = i2579[7]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2581[i + 0]) );
  }
  i2578.collisionMatrix = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2585 = data
  i2584.enabled = !!i2585[0]
  i2584.layerId = i2585[1]
  i2584.otherLayerId = i2585[2]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'material')
  i2586.gravity = new pc.Vec2( i2587[2], i2587[3] )
  i2586.positionIterations = i2587[4]
  i2586.velocityIterations = i2587[5]
  i2586.velocityThreshold = i2587[6]
  i2586.maxLinearCorrection = i2587[7]
  i2586.maxAngularCorrection = i2587[8]
  i2586.maxTranslationSpeed = i2587[9]
  i2586.maxRotationSpeed = i2587[10]
  i2586.baumgarteScale = i2587[11]
  i2586.baumgarteTOIScale = i2587[12]
  i2586.timeToSleep = i2587[13]
  i2586.linearSleepTolerance = i2587[14]
  i2586.angularSleepTolerance = i2587[15]
  i2586.defaultContactOffset = i2587[16]
  i2586.autoSimulation = !!i2587[17]
  i2586.queriesHitTriggers = !!i2587[18]
  i2586.queriesStartInColliders = !!i2587[19]
  i2586.callbacksOnDisable = !!i2587[20]
  i2586.reuseCollisionCallbacks = !!i2587[21]
  i2586.autoSyncTransforms = !!i2587[22]
  var i2589 = i2587[23]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2589[i + 0]) );
  }
  i2586.collisionMatrix = i2588
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2593 = data
  i2592.enabled = !!i2593[0]
  i2592.layerId = i2593[1]
  i2592.otherLayerId = i2593[2]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2597[i + 0]) );
  }
  i2594.qualityLevels = i2596
  var i2599 = i2595[1]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2594.names = i2598
  i2594.shadows = i2595[2]
  i2594.anisotropicFiltering = i2595[3]
  i2594.antiAliasing = i2595[4]
  i2594.lodBias = i2595[5]
  i2594.shadowCascades = i2595[6]
  i2594.shadowDistance = i2595[7]
  i2594.shadowmaskMode = i2595[8]
  i2594.shadowProjection = i2595[9]
  i2594.shadowResolution = i2595[10]
  i2594.softParticles = !!i2595[11]
  i2594.softVegetation = !!i2595[12]
  i2594.activeColorSpace = i2595[13]
  i2594.desiredColorSpace = i2595[14]
  i2594.masterTextureLimit = i2595[15]
  i2594.maxQueuedFrames = i2595[16]
  i2594.particleRaycastBudget = i2595[17]
  i2594.pixelLightCount = i2595[18]
  i2594.realtimeReflectionProbes = !!i2595[19]
  i2594.shadowCascade2Split = i2595[20]
  i2594.shadowCascade4Split = new pc.Vec3( i2595[21], i2595[22], i2595[23] )
  i2594.streamingMipmapsActive = !!i2595[24]
  i2594.vSyncCount = i2595[25]
  i2594.asyncUploadBufferSize = i2595[26]
  i2594.asyncUploadTimeSlice = i2595[27]
  i2594.billboardsFaceCameraPosition = !!i2595[28]
  i2594.shadowNearPlaneOffset = i2595[29]
  i2594.streamingMipmapsMemoryBudget = i2595[30]
  i2594.maximumLODLevel = i2595[31]
  i2594.streamingMipmapsAddAllCameras = !!i2595[32]
  i2594.streamingMipmapsMaxLevelReduction = i2595[33]
  i2594.streamingMipmapsRenderersPerFrame = i2595[34]
  i2594.resolutionScalingFixedDPIFactor = i2595[35]
  i2594.streamingMipmapsMaxFileIORequests = i2595[36]
  i2594.currentQualityLevel = i2595[37]
  return i2594
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2603 = data
  i2602.xPlacement = i2603[0]
  i2602.yPlacement = i2603[1]
  i2602.xAdvance = i2603[2]
  i2602.yAdvance = i2603[3]
  return i2602
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[10],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[10],"74":[75],"76":[77],"78":[77],"13":[12],"20":[30],"79":[80],"81":[6],"82":[12],"83":[12],"16":[13],"18":[17,12],"84":[12],"15":[13],"85":[12],"86":[12],"87":[12],"88":[12],"89":[12],"90":[12],"91":[12],"92":[12],"93":[12],"94":[17,12],"95":[12],"96":[12],"97":[12],"98":[12],"99":[17,12],"100":[12],"101":[32],"102":[32],"33":[32],"103":[32],"104":[10],"105":[10],"106":[80],"107":[12],"108":[75,12],"21":[12,17],"109":[12],"110":[17,12],"111":[75],"112":[17,12],"113":[12],"114":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Card","UnityEngine.SpriteRenderer","UnityEngine.GameObject","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HandController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Light","CardLayer","CardPool","DeckController","ThrowController","DragController","OpponentController","HandSlotArc","HandSettingsSO","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.39f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "02/13/2025 12:27:01";

Deserializers.lunaDaysRunning = "8.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27755";

Deserializers.projectId = "86c95cefbe542cc4181437bf599fdd6f";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1842";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3669";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.My-project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "0f7f0d8b-9c24-4fdf-9251-937b8725ca8f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

