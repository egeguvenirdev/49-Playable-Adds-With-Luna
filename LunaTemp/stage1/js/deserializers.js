var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i308 = root || request.c( 'UnityEngine.JointSpring' )
  var i309 = data
  i308.spring = i309[0]
  i308.damper = i309[1]
  i308.targetPosition = i309[2]
  return i308
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.JointMotor' )
  var i311 = data
  i310.m_TargetVelocity = i311[0]
  i310.m_Force = i311[1]
  i310.m_FreeSpin = i311[2]
  return i310
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.JointLimits' )
  var i313 = data
  i312.m_Min = i313[0]
  i312.m_Max = i313[1]
  i312.m_Bounciness = i313[2]
  i312.m_BounceMinVelocity = i313[3]
  i312.m_ContactDistance = i313[4]
  i312.minBounce = i313[5]
  i312.maxBounce = i313[6]
  return i312
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.JointDrive' )
  var i315 = data
  i314.m_PositionSpring = i315[0]
  i314.m_PositionDamper = i315[1]
  i314.m_MaximumForce = i315[2]
  i314.m_UseAcceleration = i315[3]
  return i314
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i317 = data
  i316.m_Spring = i317[0]
  i316.m_Damper = i317[1]
  return i316
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i319 = data
  i318.m_Limit = i319[0]
  i318.m_Bounciness = i319[1]
  i318.m_ContactDistance = i319[2]
  return i318
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i321 = data
  i320.m_ExtremumSlip = i321[0]
  i320.m_ExtremumValue = i321[1]
  i320.m_AsymptoteSlip = i321[2]
  i320.m_AsymptoteValue = i321[3]
  i320.m_Stiffness = i321[4]
  return i320
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i323 = data
  i322.m_LowerAngle = i323[0]
  i322.m_UpperAngle = i323[1]
  return i322
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i325 = data
  i324.m_MotorSpeed = i325[0]
  i324.m_MaximumMotorTorque = i325[1]
  return i324
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i327 = data
  i326.m_DampingRatio = i327[0]
  i326.m_Frequency = i327[1]
  i326.m_Angle = i327[2]
  return i326
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i329 = data
  i328.m_LowerTranslation = i329[0]
  i328.m_UpperTranslation = i329[1]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i331 = data
  i330.name = i331[0]
  i330.width = i331[1]
  i330.height = i331[2]
  i330.mipmapCount = i331[3]
  i330.anisoLevel = i331[4]
  i330.filterMode = i331[5]
  i330.hdr = !!i331[6]
  i330.format = i331[7]
  i330.wrapMode = i331[8]
  i330.alphaIsTransparency = !!i331[9]
  i330.alphaSource = i331[10]
  i330.graphicsFormat = i331[11]
  i330.sRGBTexture = !!i331[12]
  i330.desiredColorSpace = i331[13]
  i330.wrapU = i331[14]
  i330.wrapV = i331[15]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i333 = data
  i332.name = i333[0]
  i332.halfPrecision = !!i333[1]
  i332.useUInt32IndexFormat = !!i333[2]
  i332.vertexCount = i333[3]
  i332.aabb = i333[4]
  var i335 = i333[5]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( !!i335[i + 0] );
  }
  i332.streams = i334
  i332.vertices = i333[6]
  var i337 = i333[7]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i337[i + 0]) );
  }
  i332.subMeshes = i336
  var i339 = i333[8]
  var i338 = []
  for(var i = 0; i < i339.length; i += 16) {
    i338.push( new pc.Mat4().setData(i339[i + 0], i339[i + 1], i339[i + 2], i339[i + 3],  i339[i + 4], i339[i + 5], i339[i + 6], i339[i + 7],  i339[i + 8], i339[i + 9], i339[i + 10], i339[i + 11],  i339[i + 12], i339[i + 13], i339[i + 14], i339[i + 15]) );
  }
  i332.bindposes = i338
  var i341 = i333[9]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i341[i + 0]) );
  }
  i332.blendShapes = i340
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i347 = data
  i346.triangles = i347[0]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i353 = data
  i352.name = i353[0]
  var i355 = i353[1]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i355[i + 0]) );
  }
  i352.frames = i354
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i356 = root || new pc.UnityMaterial()
  var i357 = data
  i356.name = i357[0]
  request.r(i357[1], i357[2], 0, i356, 'shader')
  i356.renderQueue = i357[3]
  i356.enableInstancing = !!i357[4]
  var i359 = i357[5]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i359[i + 0]) );
  }
  i356.floatParameters = i358
  var i361 = i357[6]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i361[i + 0]) );
  }
  i356.colorParameters = i360
  var i363 = i357[7]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i363[i + 0]) );
  }
  i356.vectorParameters = i362
  var i365 = i357[8]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i365[i + 0]) );
  }
  i356.textureParameters = i364
  var i367 = i357[9]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i367[i + 0]) );
  }
  i356.materialFlags = i366
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i371 = data
  i370.name = i371[0]
  i370.value = i371[1]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i375 = data
  i374.name = i375[0]
  i374.value = new pc.Color(i375[1], i375[2], i375[3], i375[4])
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = new pc.Vec4( i379[1], i379[2], i379[3], i379[4] )
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i383 = data
  i382.name = i383[0]
  request.r(i383[1], i383[2], 0, i382, 'value')
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i387 = data
  i386.name = i387[0]
  i386.enabled = !!i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i389 = data
  i388.position = new pc.Vec3( i389[0], i389[1], i389[2] )
  i388.scale = new pc.Vec3( i389[3], i389[4], i389[5] )
  i388.rotation = new pc.Quat(i389[6], i389[7], i389[8], i389[9])
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i391 = data
  request.r(i391[0], i391[1], 0, i390, 'sharedMesh')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'additionalVertexStreams')
  i392.enabled = !!i393[2]
  request.r(i393[3], i393[4], 0, i392, 'sharedMaterial')
  var i395 = i393[5]
  var i394 = []
  for(var i = 0; i < i395.length; i += 2) {
  request.r(i395[i + 0], i395[i + 1], 2, i394, '')
  }
  i392.sharedMaterials = i394
  i392.receiveShadows = !!i393[6]
  i392.shadowCastingMode = i393[7]
  i392.sortingLayerID = i393[8]
  i392.sortingOrder = i393[9]
  i392.lightmapIndex = i393[10]
  i392.lightmapSceneIndex = i393[11]
  i392.lightmapScaleOffset = new pc.Vec4( i393[12], i393[13], i393[14], i393[15] )
  i392.lightProbeUsage = i393[16]
  i392.reflectionProbeUsage = i393[17]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.isTrigger = !!i399[1]
  request.r(i399[2], i399[3], 0, i398, 'material')
  i398.center = new pc.Vec3( i399[4], i399[5], i399[6] )
  i398.radius = i399[7]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i401 = data
  i400.mass = i401[0]
  i400.drag = i401[1]
  i400.angularDrag = i401[2]
  i400.useGravity = !!i401[3]
  i400.isKinematic = !!i401[4]
  i400.constraints = i401[5]
  i400.maxAngularVelocity = i401[6]
  i400.collisionDetectionMode = i401[7]
  i400.interpolation = i401[8]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i403 = data
  i402.name = i403[0]
  i402.tagId = i403[1]
  i402.enabled = !!i403[2]
  i402.isStatic = !!i403[3]
  i402.layer = i403[4]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i405 = data
  i404.name = i405[0]
  i404.atlasId = i405[1]
  i404.mipmapCount = i405[2]
  i404.hdr = !!i405[3]
  i404.size = i405[4]
  i404.anisoLevel = i405[5]
  i404.filterMode = i405[6]
  var i407 = i405[7]
  var i406 = []
  for(var i = 0; i < i407.length; i += 4) {
    i406.push( UnityEngine.Rect.MinMaxRect(i407[i + 0], i407[i + 1], i407[i + 2], i407[i + 3]) );
  }
  i404.rects = i406
  i404.wrapU = i405[8]
  i404.wrapV = i405[9]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i411 = data
  i410.name = i411[0]
  i410.index = i411[1]
  i410.startup = !!i411[2]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i413 = data
  i412.enabled = !!i413[0]
  i412.aspect = i413[1]
  i412.orthographic = !!i413[2]
  i412.orthographicSize = i413[3]
  i412.backgroundColor = new pc.Color(i413[4], i413[5], i413[6], i413[7])
  i412.nearClipPlane = i413[8]
  i412.farClipPlane = i413[9]
  i412.fieldOfView = i413[10]
  i412.depth = i413[11]
  i412.clearFlags = i413[12]
  i412.cullingMask = i413[13]
  i412.rect = i413[14]
  request.r(i413[15], i413[16], 0, i412, 'targetTexture')
  i412.usePhysicalProperties = !!i413[17]
  i412.focalLength = i413[18]
  i412.sensorSize = new pc.Vec2( i413[19], i413[20] )
  i412.lensShift = new pc.Vec2( i413[21], i413[22] )
  i412.gateFit = i413[23]
  i412.commandBufferCount = i413[24]
  i412.cameraType = i413[25]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i415 = data
  i414.enabled = !!i415[0]
  i414.type = i415[1]
  i414.color = new pc.Color(i415[2], i415[3], i415[4], i415[5])
  i414.cullingMask = i415[6]
  i414.intensity = i415[7]
  i414.range = i415[8]
  i414.spotAngle = i415[9]
  i414.shadows = i415[10]
  i414.shadowNormalBias = i415[11]
  i414.shadowBias = i415[12]
  i414.shadowStrength = i415[13]
  i414.shadowResolution = i415[14]
  i414.lightmapBakeType = i415[15]
  i414.renderMode = i415[16]
  request.r(i415[17], i415[18], 0, i414, 'cookie')
  i414.cookieSize = i415[19]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i417 = data
  i416.pivot = new pc.Vec2( i417[0], i417[1] )
  i416.anchorMin = new pc.Vec2( i417[2], i417[3] )
  i416.anchorMax = new pc.Vec2( i417[4], i417[5] )
  i416.sizeDelta = new pc.Vec2( i417[6], i417[7] )
  i416.anchoredPosition3D = new pc.Vec3( i417[8], i417[9], i417[10] )
  i416.rotation = new pc.Quat(i417[11], i417[12], i417[13], i417[14])
  i416.scale = new pc.Vec3( i417[15], i417[16], i417[17] )
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i419 = data
  i418.enabled = !!i419[0]
  i418.planeDistance = i419[1]
  i418.referencePixelsPerUnit = i419[2]
  i418.isFallbackOverlay = !!i419[3]
  i418.renderMode = i419[4]
  i418.renderOrder = i419[5]
  i418.sortingLayerName = i419[6]
  i418.sortingOrder = i419[7]
  i418.scaleFactor = i419[8]
  request.r(i419[9], i419[10], 0, i418, 'worldCamera')
  i418.overrideSorting = !!i419[11]
  i418.pixelPerfect = !!i419[12]
  i418.targetDisplay = i419[13]
  i418.overridePixelPerfect = !!i419[14]
  return i418
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i421 = data
  i420.m_UiScaleMode = i421[0]
  i420.m_ReferencePixelsPerUnit = i421[1]
  i420.m_ScaleFactor = i421[2]
  i420.m_ReferenceResolution = new pc.Vec2( i421[3], i421[4] )
  i420.m_ScreenMatchMode = i421[5]
  i420.m_MatchWidthOrHeight = i421[6]
  i420.m_PhysicalUnit = i421[7]
  i420.m_FallbackScreenDPI = i421[8]
  i420.m_DefaultSpriteDPI = i421[9]
  i420.m_DynamicPixelsPerUnit = i421[10]
  i420.m_PresetInfoIsWorld = !!i421[11]
  return i420
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i423 = data
  i422.m_IgnoreReversedGraphics = !!i423[0]
  i422.m_BlockingObjects = i423[1]
  i422.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i423[2] )
  return i422
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'm_FirstSelected')
  i424.m_sendNavigationEvents = !!i425[2]
  i424.m_DragThreshold = i425[3]
  return i424
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i427 = data
  i426.m_HorizontalAxis = i427[0]
  i426.m_VerticalAxis = i427[1]
  i426.m_SubmitButton = i427[2]
  i426.m_CancelButton = i427[3]
  i426.m_InputActionsPerSecond = i427[4]
  i426.m_RepeatDelay = i427[5]
  i426.m_ForceModuleActive = !!i427[6]
  i426.m_SendPointerHoverToParent = !!i427[7]
  return i426
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i429 = data
  i428.m_Spacing = i429[0]
  i428.m_ChildForceExpandWidth = !!i429[1]
  i428.m_ChildForceExpandHeight = !!i429[2]
  i428.m_ChildControlWidth = !!i429[3]
  i428.m_ChildControlHeight = !!i429[4]
  i428.m_ChildScaleWidth = !!i429[5]
  i428.m_ChildScaleHeight = !!i429[6]
  i428.m_ReverseArrangement = !!i429[7]
  i428.m_Padding = UnityEngine.RectOffset.FromPaddings(i429[8], i429[9], i429[10], i429[11])
  i428.m_ChildAlignment = i429[12]
  return i428
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i431 = data
  i430.m_Spacing = i431[0]
  i430.m_ChildForceExpandWidth = !!i431[1]
  i430.m_ChildForceExpandHeight = !!i431[2]
  i430.m_ChildControlWidth = !!i431[3]
  i430.m_ChildControlHeight = !!i431[4]
  i430.m_ChildScaleWidth = !!i431[5]
  i430.m_ChildScaleHeight = !!i431[6]
  i430.m_ReverseArrangement = !!i431[7]
  i430.m_Padding = UnityEngine.RectOffset.FromPaddings(i431[8], i431[9], i431[10], i431[11])
  i430.m_ChildAlignment = i431[12]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i433 = data
  i432.cullTransparentMesh = !!i433[0]
  return i432
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.Image' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'm_Sprite')
  i434.m_Type = i435[2]
  i434.m_PreserveAspect = !!i435[3]
  i434.m_FillCenter = !!i435[4]
  i434.m_FillMethod = i435[5]
  i434.m_FillAmount = i435[6]
  i434.m_FillClockwise = !!i435[7]
  i434.m_FillOrigin = i435[8]
  i434.m_UseSpriteMesh = !!i435[9]
  i434.m_PixelsPerUnitMultiplier = i435[10]
  request.r(i435[11], i435[12], 0, i434, 'm_Material')
  i434.m_Maskable = !!i435[13]
  i434.m_Color = new pc.Color(i435[14], i435[15], i435[16], i435[17])
  i434.m_RaycastTarget = !!i435[18]
  i434.m_RaycastPadding = new pc.Vec4( i435[19], i435[20], i435[21], i435[22] )
  return i434
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.UI.Button' )
  var i437 = data
  i436.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i437[0], i436.m_OnClick)
  i436.m_Navigation = request.d('UnityEngine.UI.Navigation', i437[1], i436.m_Navigation)
  i436.m_Transition = i437[2]
  i436.m_Colors = request.d('UnityEngine.UI.ColorBlock', i437[3], i436.m_Colors)
  i436.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i437[4], i436.m_SpriteState)
  i436.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i437[5], i436.m_AnimationTriggers)
  i436.m_Interactable = !!i437[6]
  request.r(i437[7], i437[8], 0, i436, 'm_TargetGraphic')
  return i436
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i439 = data
  i438.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i439[0], i438.m_PersistentCalls)
  return i438
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i441 = data
  var i443 = i441[0]
  var i442 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i443.length; i += 1) {
    i442.add(request.d('UnityEngine.Events.PersistentCall', i443[i + 0]));
  }
  i440.m_Calls = i442
  return i440
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'm_Target')
  i446.m_TargetAssemblyTypeName = i447[2]
  i446.m_MethodName = i447[3]
  i446.m_Mode = i447[4]
  i446.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i447[5], i446.m_Arguments)
  i446.m_CallState = i447[6]
  return i446
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'm_ObjectArgument')
  i448.m_ObjectArgumentAssemblyTypeName = i449[2]
  i448.m_IntArgument = i449[3]
  i448.m_FloatArgument = i449[4]
  i448.m_StringArgument = i449[5]
  i448.m_BoolArgument = !!i449[6]
  return i448
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i451 = data
  i450.m_Mode = i451[0]
  i450.m_WrapAround = !!i451[1]
  request.r(i451[2], i451[3], 0, i450, 'm_SelectOnUp')
  request.r(i451[4], i451[5], 0, i450, 'm_SelectOnDown')
  request.r(i451[6], i451[7], 0, i450, 'm_SelectOnLeft')
  request.r(i451[8], i451[9], 0, i450, 'm_SelectOnRight')
  return i450
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i453 = data
  i452.m_NormalColor = new pc.Color(i453[0], i453[1], i453[2], i453[3])
  i452.m_HighlightedColor = new pc.Color(i453[4], i453[5], i453[6], i453[7])
  i452.m_PressedColor = new pc.Color(i453[8], i453[9], i453[10], i453[11])
  i452.m_SelectedColor = new pc.Color(i453[12], i453[13], i453[14], i453[15])
  i452.m_DisabledColor = new pc.Color(i453[16], i453[17], i453[18], i453[19])
  i452.m_ColorMultiplier = i453[20]
  i452.m_FadeDuration = i453[21]
  return i452
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i455 = data
  request.r(i455[0], i455[1], 0, i454, 'm_HighlightedSprite')
  request.r(i455[2], i455[3], 0, i454, 'm_PressedSprite')
  request.r(i455[4], i455[5], 0, i454, 'm_SelectedSprite')
  request.r(i455[6], i455[7], 0, i454, 'm_DisabledSprite')
  return i454
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i457 = data
  i456.m_NormalTrigger = i457[0]
  i456.m_HighlightedTrigger = i457[1]
  i456.m_PressedTrigger = i457[2]
  i456.m_SelectedTrigger = i457[3]
  i456.m_DisabledTrigger = i457[4]
  return i456
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.UI.Text' )
  var i459 = data
  i458.m_FontData = request.d('UnityEngine.UI.FontData', i459[0], i458.m_FontData)
  i458.m_Text = i459[1]
  request.r(i459[2], i459[3], 0, i458, 'm_Material')
  i458.m_Maskable = !!i459[4]
  i458.m_Color = new pc.Color(i459[5], i459[6], i459[7], i459[8])
  i458.m_RaycastTarget = !!i459[9]
  i458.m_RaycastPadding = new pc.Vec4( i459[10], i459[11], i459[12], i459[13] )
  return i458
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.UI.FontData' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'm_Font')
  i460.m_FontSize = i461[2]
  i460.m_FontStyle = i461[3]
  i460.m_BestFit = !!i461[4]
  i460.m_MinSize = i461[5]
  i460.m_MaxSize = i461[6]
  i460.m_Alignment = i461[7]
  i460.m_AlignByGeometry = !!i461[8]
  i460.m_RichText = !!i461[9]
  i460.m_HorizontalOverflow = i461[10]
  i460.m_VerticalOverflow = i461[11]
  i460.m_LineSpacing = i461[12]
  return i460
}

Deserializers["PlayableTestManager"] = function (request, data, root) {
  var i462 = root || request.c( 'PlayableTestManager' )
  var i463 = data
  i462.maxLives = i463[0]
  i462.blastRadius = i463[1]
  i462.forceMin = i463[2]
  i462.forceMax = i463[3]
  i462.ballCount = i463[4]
  request.r(i463[5], i463[6], 0, i462, 'forcePos')
  request.r(i463[7], i463[8], 0, i462, 'instantiatePos')
  request.r(i463[9], i463[10], 0, i462, 'ball')
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i465 = data
  i464.enabled = !!i465[0]
  i464.isTrigger = !!i465[1]
  request.r(i465[2], i465[3], 0, i464, 'material')
  request.r(i465[4], i465[5], 0, i464, 'sharedMesh')
  i464.convex = !!i465[6]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i467 = data
  i466.ambientIntensity = i467[0]
  i466.reflectionIntensity = i467[1]
  i466.ambientMode = i467[2]
  i466.ambientLight = new pc.Color(i467[3], i467[4], i467[5], i467[6])
  i466.ambientSkyColor = new pc.Color(i467[7], i467[8], i467[9], i467[10])
  i466.ambientGroundColor = new pc.Color(i467[11], i467[12], i467[13], i467[14])
  i466.ambientEquatorColor = new pc.Color(i467[15], i467[16], i467[17], i467[18])
  i466.fogColor = new pc.Color(i467[19], i467[20], i467[21], i467[22])
  i466.fogEndDistance = i467[23]
  i466.fogStartDistance = i467[24]
  i466.fogDensity = i467[25]
  i466.fog = !!i467[26]
  request.r(i467[27], i467[28], 0, i466, 'skybox')
  i466.fogMode = i467[29]
  var i469 = i467[30]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i469[i + 0]) );
  }
  i466.lightmaps = i468
  i466.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i467[31], i466.lightProbes)
  i466.lightmapsMode = i467[32]
  i466.mixedBakeMode = i467[33]
  i466.environmentLightingMode = i467[34]
  i466.ambientProbe = new pc.SphericalHarmonicsL2(i467[35])
  i466.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i467[36])
  i466.useReferenceAmbientProbe = !!i467[37]
  request.r(i467[38], i467[39], 0, i466, 'customReflection')
  request.r(i467[40], i467[41], 0, i466, 'defaultReflection')
  i466.defaultReflectionMode = i467[42]
  i466.defaultReflectionResolution = i467[43]
  i466.sunLightObjectId = i467[44]
  i466.pixelLightCount = i467[45]
  i466.defaultReflectionHDR = !!i467[46]
  i466.hasLightDataAsset = !!i467[47]
  i466.hasManualGenerate = !!i467[48]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'lightmapColor')
  request.r(i473[2], i473[3], 0, i472, 'lightmapDirection')
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i474 = root || new UnityEngine.LightProbes()
  var i475 = data
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i483 = data
  i482.name = i483[0]
  i482.bounciness = i483[1]
  i482.dynamicFriction = i483[2]
  i482.staticFriction = i483[3]
  i482.frictionCombine = i483[4]
  i482.bounceCombine = i483[5]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i485 = data
  var i487 = i485[0]
  var i486 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i487.length; i += 1) {
    i486.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i487[i + 0]));
  }
  i484.ShaderCompilationErrors = i486
  i484.name = i485[1]
  i484.guid = i485[2]
  var i489 = i485[3]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( i489[i + 0] );
  }
  i484.shaderDefinedKeywords = i488
  var i491 = i485[4]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i491[i + 0]) );
  }
  i484.passes = i490
  var i493 = i485[5]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i493[i + 0]) );
  }
  i484.usePasses = i492
  var i495 = i485[6]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i495[i + 0]) );
  }
  i484.defaultParameterValues = i494
  request.r(i485[7], i485[8], 0, i484, 'unityFallbackShader')
  i484.readDepth = !!i485[9]
  i484.isCreatedByShaderGraph = !!i485[10]
  i484.compiled = !!i485[11]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i499 = data
  i498.shaderName = i499[0]
  i498.errorMessage = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i504 = root || new pc.UnityShaderPass()
  var i505 = data
  i504.id = i505[0]
  i504.subShaderIndex = i505[1]
  i504.name = i505[2]
  i504.passType = i505[3]
  i504.grabPassTextureName = i505[4]
  i504.usePass = !!i505[5]
  i504.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[6], i504.zTest)
  i504.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[7], i504.zWrite)
  i504.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[8], i504.culling)
  i504.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i505[9], i504.blending)
  i504.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i505[10], i504.alphaBlending)
  i504.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[11], i504.colorWriteMask)
  i504.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[12], i504.offsetUnits)
  i504.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[13], i504.offsetFactor)
  i504.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[14], i504.stencilRef)
  i504.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[15], i504.stencilReadMask)
  i504.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[16], i504.stencilWriteMask)
  i504.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i505[17], i504.stencilOp)
  i504.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i505[18], i504.stencilOpFront)
  i504.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i505[19], i504.stencilOpBack)
  var i507 = i505[20]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i507[i + 0]) );
  }
  i504.tags = i506
  var i509 = i505[21]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i504.passDefinedKeywords = i508
  var i511 = i505[22]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i511[i + 0]) );
  }
  i504.passDefinedKeywordGroups = i510
  var i513 = i505[23]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i513[i + 0]) );
  }
  i504.variants = i512
  var i515 = i505[24]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i515[i + 0]) );
  }
  i504.excludedVariants = i514
  i504.hasDepthReader = !!i505[25]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i517 = data
  i516.val = i517[0]
  i516.name = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i519 = data
  i518.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[0], i518.src)
  i518.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[1], i518.dst)
  i518.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[2], i518.op)
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i521 = data
  i520.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[0], i520.pass)
  i520.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[1], i520.fail)
  i520.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[2], i520.zFail)
  i520.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[3], i520.comp)
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i525 = data
  i524.name = i525[0]
  i524.value = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i529 = data
  var i531 = i529[0]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( i531[i + 0] );
  }
  i528.keywords = i530
  i528.hasDiscard = !!i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i535 = data
  i534.passId = i535[0]
  i534.subShaderIndex = i535[1]
  var i537 = i535[2]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( i537[i + 0] );
  }
  i534.keywords = i536
  i534.vertexProgram = i535[3]
  i534.fragmentProgram = i535[4]
  i534.exportedForWebGl2 = !!i535[5]
  i534.readDepth = !!i535[6]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'shader')
  i540.pass = i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i545 = data
  i544.name = i545[0]
  i544.type = i545[1]
  i544.value = new pc.Vec4( i545[2], i545[3], i545[4], i545[5] )
  i544.textureValue = i545[6]
  i544.shaderPropertyFlag = i545[7]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'texture')
  i546.aabb = i547[3]
  i546.vertices = i547[4]
  i546.triangles = i547[5]
  i546.textureRect = UnityEngine.Rect.MinMaxRect(i547[6], i547[7], i547[8], i547[9])
  i546.packedRect = UnityEngine.Rect.MinMaxRect(i547[10], i547[11], i547[12], i547[13])
  i546.border = new pc.Vec4( i547[14], i547[15], i547[16], i547[17] )
  i546.transparency = i547[18]
  i546.bounds = i547[19]
  i546.pixelsPerUnit = i547[20]
  i546.textureWidth = i547[21]
  i546.textureHeight = i547[22]
  i546.nativeSize = new pc.Vec2( i547[23], i547[24] )
  i546.pivot = new pc.Vec2( i547[25], i547[26] )
  i546.textureRectOffset = new pc.Vec2( i547[27], i547[28] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i549 = data
  i548.name = i549[0]
  i548.ascent = i549[1]
  i548.originalLineHeight = i549[2]
  i548.fontSize = i549[3]
  var i551 = i549[4]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i551[i + 0]) );
  }
  i548.characterInfo = i550
  request.r(i549[5], i549[6], 0, i548, 'texture')
  i548.originalFontSize = i549[7]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i555 = data
  i554.index = i555[0]
  i554.advance = i555[1]
  i554.bearing = i555[2]
  i554.glyphWidth = i555[3]
  i554.glyphHeight = i555[4]
  i554.minX = i555[5]
  i554.maxX = i555[6]
  i554.minY = i555[7]
  i554.maxY = i555[8]
  i554.uvBottomLeftX = i555[9]
  i554.uvBottomLeftY = i555[10]
  i554.uvBottomRightX = i555[11]
  i554.uvBottomRightY = i555[12]
  i554.uvTopLeftX = i555[13]
  i554.uvTopLeftY = i555[14]
  i554.uvTopRightX = i555[15]
  i554.uvTopRightY = i555[16]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i557 = data
  var i559 = i557[0]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i559[i + 0]) );
  }
  i556.files = i558
  i556.componentToPrefabIds = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i563 = data
  i562.path = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'unityObject')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i565 = data
  var i567 = i565[0]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i567[i + 0]) );
  }
  i564.scriptsExecutionOrder = i566
  var i569 = i565[1]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i569[i + 0]) );
  }
  i564.sortingLayers = i568
  var i571 = i565[2]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i571[i + 0]) );
  }
  i564.cullingLayers = i570
  i564.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i565[3], i564.timeSettings)
  i564.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i565[4], i564.physicsSettings)
  i564.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i565[5], i564.physics2DSettings)
  i564.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i565[6], i564.qualitySettings)
  i564.enableRealtimeShadows = !!i565[7]
  i564.enableAutoInstancing = !!i565[8]
  i564.enableDynamicBatching = !!i565[9]
  i564.lightmapEncodingQuality = i565[10]
  i564.desiredColorSpace = i565[11]
  var i573 = i565[12]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( i573[i + 0] );
  }
  i564.allTags = i572
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i581 = data
  i580.id = i581[0]
  i580.name = i581[1]
  i580.value = i581[2]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i585 = data
  i584.id = i585[0]
  i584.name = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i587 = data
  i586.fixedDeltaTime = i587[0]
  i586.maximumDeltaTime = i587[1]
  i586.timeScale = i587[2]
  i586.maximumParticleTimestep = i587[3]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i589 = data
  i588.gravity = new pc.Vec3( i589[0], i589[1], i589[2] )
  i588.defaultSolverIterations = i589[3]
  i588.bounceThreshold = i589[4]
  i588.autoSyncTransforms = !!i589[5]
  i588.autoSimulation = !!i589[6]
  var i591 = i589[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i591[i + 0]) );
  }
  i588.collisionMatrix = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i595 = data
  i594.enabled = !!i595[0]
  i594.layerId = i595[1]
  i594.otherLayerId = i595[2]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'material')
  i596.gravity = new pc.Vec2( i597[2], i597[3] )
  i596.positionIterations = i597[4]
  i596.velocityIterations = i597[5]
  i596.velocityThreshold = i597[6]
  i596.maxLinearCorrection = i597[7]
  i596.maxAngularCorrection = i597[8]
  i596.maxTranslationSpeed = i597[9]
  i596.maxRotationSpeed = i597[10]
  i596.baumgarteScale = i597[11]
  i596.baumgarteTOIScale = i597[12]
  i596.timeToSleep = i597[13]
  i596.linearSleepTolerance = i597[14]
  i596.angularSleepTolerance = i597[15]
  i596.defaultContactOffset = i597[16]
  i596.autoSimulation = !!i597[17]
  i596.queriesHitTriggers = !!i597[18]
  i596.queriesStartInColliders = !!i597[19]
  i596.callbacksOnDisable = !!i597[20]
  i596.reuseCollisionCallbacks = !!i597[21]
  i596.autoSyncTransforms = !!i597[22]
  var i599 = i597[23]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i599[i + 0]) );
  }
  i596.collisionMatrix = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i603 = data
  i602.enabled = !!i603[0]
  i602.layerId = i603[1]
  i602.otherLayerId = i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i607[i + 0]) );
  }
  i604.qualityLevels = i606
  var i609 = i605[1]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( i609[i + 0] );
  }
  i604.names = i608
  i604.shadows = i605[2]
  i604.anisotropicFiltering = i605[3]
  i604.antiAliasing = i605[4]
  i604.lodBias = i605[5]
  i604.shadowCascades = i605[6]
  i604.shadowDistance = i605[7]
  i604.shadowmaskMode = i605[8]
  i604.shadowProjection = i605[9]
  i604.shadowResolution = i605[10]
  i604.softParticles = !!i605[11]
  i604.softVegetation = !!i605[12]
  i604.activeColorSpace = i605[13]
  i604.desiredColorSpace = i605[14]
  i604.masterTextureLimit = i605[15]
  i604.maxQueuedFrames = i605[16]
  i604.particleRaycastBudget = i605[17]
  i604.pixelLightCount = i605[18]
  i604.realtimeReflectionProbes = !!i605[19]
  i604.shadowCascade2Split = i605[20]
  i604.shadowCascade4Split = new pc.Vec3( i605[21], i605[22], i605[23] )
  i604.streamingMipmapsActive = !!i605[24]
  i604.vSyncCount = i605[25]
  i604.asyncUploadBufferSize = i605[26]
  i604.asyncUploadTimeSlice = i605[27]
  i604.billboardsFaceCameraPosition = !!i605[28]
  i604.shadowNearPlaneOffset = i605[29]
  i604.streamingMipmapsMemoryBudget = i605[30]
  i604.maximumLODLevel = i605[31]
  i604.streamingMipmapsAddAllCameras = !!i605[32]
  i604.streamingMipmapsMaxLevelReduction = i605[33]
  i604.streamingMipmapsRenderersPerFrame = i605[34]
  i604.resolutionScalingFixedDPIFactor = i605[35]
  i604.streamingMipmapsMaxFileIORequests = i605[36]
  i604.currentQualityLevel = i605[37]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i615 = data
  i614.weight = i615[0]
  i614.vertices = i615[1]
  i614.normals = i615[2]
  i614.tangents = i615[3]
  return i614
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[9],"43":[8],"44":[8],"45":[8],"46":[8],"47":[8],"48":[8],"49":[8],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[51],"59":[51],"60":[51],"61":[51],"62":[51],"63":[51],"64":[9],"65":[4],"66":[67],"68":[67],"13":[12],"69":[12],"70":[12],"16":[13],"22":[21,12],"71":[12],"15":[13],"72":[12],"73":[12],"20":[12],"74":[12],"75":[12],"76":[12],"19":[12],"77":[12],"78":[12],"79":[21,12],"80":[12],"81":[12],"82":[12],"83":[12],"26":[21,12],"84":[12],"85":[17],"86":[17],"18":[17],"87":[17],"88":[9],"89":[9],"90":[12],"91":[4,12],"92":[12,21],"93":[12],"94":[21,12],"95":[4],"96":[21,12],"97":[12],"98":[99],"100":[99],"101":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","PlayableTestManager","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MonoBehaviour","UnityEngine.GameObject","UnityEngine.MeshCollider","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.39f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "02/13/2025 12:27:01";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27548";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1763";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3139";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.My-project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8fe1c990-5da4-4056-9a9c-4f75e3cce2a6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

