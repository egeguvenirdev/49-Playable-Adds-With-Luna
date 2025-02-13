var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.JointSpring' )
  var i925 = data
  i924.spring = i925[0]
  i924.damper = i925[1]
  i924.targetPosition = i925[2]
  return i924
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.JointMotor' )
  var i927 = data
  i926.m_TargetVelocity = i927[0]
  i926.m_Force = i927[1]
  i926.m_FreeSpin = i927[2]
  return i926
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.JointLimits' )
  var i929 = data
  i928.m_Min = i929[0]
  i928.m_Max = i929[1]
  i928.m_Bounciness = i929[2]
  i928.m_BounceMinVelocity = i929[3]
  i928.m_ContactDistance = i929[4]
  i928.minBounce = i929[5]
  i928.maxBounce = i929[6]
  return i928
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.JointDrive' )
  var i931 = data
  i930.m_PositionSpring = i931[0]
  i930.m_PositionDamper = i931[1]
  i930.m_MaximumForce = i931[2]
  i930.m_UseAcceleration = i931[3]
  return i930
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i933 = data
  i932.m_Spring = i933[0]
  i932.m_Damper = i933[1]
  return i932
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i935 = data
  i934.m_Limit = i935[0]
  i934.m_Bounciness = i935[1]
  i934.m_ContactDistance = i935[2]
  return i934
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i937 = data
  i936.m_ExtremumSlip = i937[0]
  i936.m_ExtremumValue = i937[1]
  i936.m_AsymptoteSlip = i937[2]
  i936.m_AsymptoteValue = i937[3]
  i936.m_Stiffness = i937[4]
  return i936
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i939 = data
  i938.m_LowerAngle = i939[0]
  i938.m_UpperAngle = i939[1]
  return i938
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i941 = data
  i940.m_MotorSpeed = i941[0]
  i940.m_MaximumMotorTorque = i941[1]
  return i940
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i943 = data
  i942.m_DampingRatio = i943[0]
  i942.m_Frequency = i943[1]
  i942.m_Angle = i943[2]
  return i942
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i945 = data
  i944.m_LowerTranslation = i945[0]
  i944.m_UpperTranslation = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i947 = data
  i946.name = i947[0]
  i946.width = i947[1]
  i946.height = i947[2]
  i946.mipmapCount = i947[3]
  i946.anisoLevel = i947[4]
  i946.filterMode = i947[5]
  i946.hdr = !!i947[6]
  i946.format = i947[7]
  i946.wrapMode = i947[8]
  i946.alphaIsTransparency = !!i947[9]
  i946.alphaSource = i947[10]
  i946.graphicsFormat = i947[11]
  i946.sRGBTexture = !!i947[12]
  i946.desiredColorSpace = i947[13]
  i946.wrapU = i947[14]
  i946.wrapV = i947[15]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i949 = data
  i948.name = i949[0]
  i948.halfPrecision = !!i949[1]
  i948.useUInt32IndexFormat = !!i949[2]
  i948.vertexCount = i949[3]
  i948.aabb = i949[4]
  var i951 = i949[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( !!i951[i + 0] );
  }
  i948.streams = i950
  i948.vertices = i949[6]
  var i953 = i949[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i953[i + 0]) );
  }
  i948.subMeshes = i952
  var i955 = i949[8]
  var i954 = []
  for(var i = 0; i < i955.length; i += 16) {
    i954.push( new pc.Mat4().setData(i955[i + 0], i955[i + 1], i955[i + 2], i955[i + 3],  i955[i + 4], i955[i + 5], i955[i + 6], i955[i + 7],  i955[i + 8], i955[i + 9], i955[i + 10], i955[i + 11],  i955[i + 12], i955[i + 13], i955[i + 14], i955[i + 15]) );
  }
  i948.bindposes = i954
  var i957 = i949[9]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i957[i + 0]) );
  }
  i948.blendShapes = i956
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i963 = data
  i962.triangles = i963[0]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i969 = data
  i968.name = i969[0]
  var i971 = i969[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i971[i + 0]) );
  }
  i968.frames = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i972 = root || new pc.UnityMaterial()
  var i973 = data
  i972.name = i973[0]
  request.r(i973[1], i973[2], 0, i972, 'shader')
  i972.renderQueue = i973[3]
  i972.enableInstancing = !!i973[4]
  var i975 = i973[5]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i975[i + 0]) );
  }
  i972.floatParameters = i974
  var i977 = i973[6]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i977[i + 0]) );
  }
  i972.colorParameters = i976
  var i979 = i973[7]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i979[i + 0]) );
  }
  i972.vectorParameters = i978
  var i981 = i973[8]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i981[i + 0]) );
  }
  i972.textureParameters = i980
  var i983 = i973[9]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i983[i + 0]) );
  }
  i972.materialFlags = i982
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i987 = data
  i986.name = i987[0]
  i986.value = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i991 = data
  i990.name = i991[0]
  i990.value = new pc.Color(i991[1], i991[2], i991[3], i991[4])
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i995 = data
  i994.name = i995[0]
  i994.value = new pc.Vec4( i995[1], i995[2], i995[3], i995[4] )
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i999 = data
  i998.name = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'value')
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.enabled = !!i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1005 = data
  i1004.position = new pc.Vec3( i1005[0], i1005[1], i1005[2] )
  i1004.scale = new pc.Vec3( i1005[3], i1005[4], i1005[5] )
  i1004.rotation = new pc.Quat(i1005[6], i1005[7], i1005[8], i1005[9])
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'sharedMesh')
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'additionalVertexStreams')
  i1008.enabled = !!i1009[2]
  request.r(i1009[3], i1009[4], 0, i1008, 'sharedMaterial')
  var i1011 = i1009[5]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.sharedMaterials = i1010
  i1008.receiveShadows = !!i1009[6]
  i1008.shadowCastingMode = i1009[7]
  i1008.sortingLayerID = i1009[8]
  i1008.sortingOrder = i1009[9]
  i1008.lightmapIndex = i1009[10]
  i1008.lightmapSceneIndex = i1009[11]
  i1008.lightmapScaleOffset = new pc.Vec4( i1009[12], i1009[13], i1009[14], i1009[15] )
  i1008.lightProbeUsage = i1009[16]
  i1008.reflectionProbeUsage = i1009[17]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.isTrigger = !!i1015[1]
  request.r(i1015[2], i1015[3], 0, i1014, 'material')
  i1014.center = new pc.Vec3( i1015[4], i1015[5], i1015[6] )
  i1014.radius = i1015[7]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1017 = data
  i1016.mass = i1017[0]
  i1016.drag = i1017[1]
  i1016.angularDrag = i1017[2]
  i1016.useGravity = !!i1017[3]
  i1016.isKinematic = !!i1017[4]
  i1016.constraints = i1017[5]
  i1016.maxAngularVelocity = i1017[6]
  i1016.collisionDetectionMode = i1017[7]
  i1016.interpolation = i1017[8]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.tagId = i1019[1]
  i1018.enabled = !!i1019[2]
  i1018.isStatic = !!i1019[3]
  i1018.layer = i1019[4]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.atlasId = i1021[1]
  i1020.mipmapCount = i1021[2]
  i1020.hdr = !!i1021[3]
  i1020.size = i1021[4]
  i1020.anisoLevel = i1021[5]
  i1020.filterMode = i1021[6]
  var i1023 = i1021[7]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 4) {
    i1022.push( UnityEngine.Rect.MinMaxRect(i1023[i + 0], i1023[i + 1], i1023[i + 2], i1023[i + 3]) );
  }
  i1020.rects = i1022
  i1020.wrapU = i1021[8]
  i1020.wrapV = i1021[9]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.index = i1027[1]
  i1026.startup = !!i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.aspect = i1029[1]
  i1028.orthographic = !!i1029[2]
  i1028.orthographicSize = i1029[3]
  i1028.backgroundColor = new pc.Color(i1029[4], i1029[5], i1029[6], i1029[7])
  i1028.nearClipPlane = i1029[8]
  i1028.farClipPlane = i1029[9]
  i1028.fieldOfView = i1029[10]
  i1028.depth = i1029[11]
  i1028.clearFlags = i1029[12]
  i1028.cullingMask = i1029[13]
  i1028.rect = i1029[14]
  request.r(i1029[15], i1029[16], 0, i1028, 'targetTexture')
  i1028.usePhysicalProperties = !!i1029[17]
  i1028.focalLength = i1029[18]
  i1028.sensorSize = new pc.Vec2( i1029[19], i1029[20] )
  i1028.lensShift = new pc.Vec2( i1029[21], i1029[22] )
  i1028.gateFit = i1029[23]
  i1028.commandBufferCount = i1029[24]
  i1028.cameraType = i1029[25]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1031 = data
  i1030.enabled = !!i1031[0]
  i1030.type = i1031[1]
  i1030.color = new pc.Color(i1031[2], i1031[3], i1031[4], i1031[5])
  i1030.cullingMask = i1031[6]
  i1030.intensity = i1031[7]
  i1030.range = i1031[8]
  i1030.spotAngle = i1031[9]
  i1030.shadows = i1031[10]
  i1030.shadowNormalBias = i1031[11]
  i1030.shadowBias = i1031[12]
  i1030.shadowStrength = i1031[13]
  i1030.shadowResolution = i1031[14]
  i1030.lightmapBakeType = i1031[15]
  i1030.renderMode = i1031[16]
  request.r(i1031[17], i1031[18], 0, i1030, 'cookie')
  i1030.cookieSize = i1031[19]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1033 = data
  i1032.pivot = new pc.Vec2( i1033[0], i1033[1] )
  i1032.anchorMin = new pc.Vec2( i1033[2], i1033[3] )
  i1032.anchorMax = new pc.Vec2( i1033[4], i1033[5] )
  i1032.sizeDelta = new pc.Vec2( i1033[6], i1033[7] )
  i1032.anchoredPosition3D = new pc.Vec3( i1033[8], i1033[9], i1033[10] )
  i1032.rotation = new pc.Quat(i1033[11], i1033[12], i1033[13], i1033[14])
  i1032.scale = new pc.Vec3( i1033[15], i1033[16], i1033[17] )
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.planeDistance = i1035[1]
  i1034.referencePixelsPerUnit = i1035[2]
  i1034.isFallbackOverlay = !!i1035[3]
  i1034.renderMode = i1035[4]
  i1034.renderOrder = i1035[5]
  i1034.sortingLayerName = i1035[6]
  i1034.sortingOrder = i1035[7]
  i1034.scaleFactor = i1035[8]
  request.r(i1035[9], i1035[10], 0, i1034, 'worldCamera')
  i1034.overrideSorting = !!i1035[11]
  i1034.pixelPerfect = !!i1035[12]
  i1034.targetDisplay = i1035[13]
  i1034.overridePixelPerfect = !!i1035[14]
  return i1034
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1037 = data
  i1036.m_UiScaleMode = i1037[0]
  i1036.m_ReferencePixelsPerUnit = i1037[1]
  i1036.m_ScaleFactor = i1037[2]
  i1036.m_ReferenceResolution = new pc.Vec2( i1037[3], i1037[4] )
  i1036.m_ScreenMatchMode = i1037[5]
  i1036.m_MatchWidthOrHeight = i1037[6]
  i1036.m_PhysicalUnit = i1037[7]
  i1036.m_FallbackScreenDPI = i1037[8]
  i1036.m_DefaultSpriteDPI = i1037[9]
  i1036.m_DynamicPixelsPerUnit = i1037[10]
  i1036.m_PresetInfoIsWorld = !!i1037[11]
  return i1036
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1039 = data
  i1038.m_IgnoreReversedGraphics = !!i1039[0]
  i1038.m_BlockingObjects = i1039[1]
  i1038.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1039[2] )
  return i1038
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'm_FirstSelected')
  i1040.m_sendNavigationEvents = !!i1041[2]
  i1040.m_DragThreshold = i1041[3]
  return i1040
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1043 = data
  i1042.m_HorizontalAxis = i1043[0]
  i1042.m_VerticalAxis = i1043[1]
  i1042.m_SubmitButton = i1043[2]
  i1042.m_CancelButton = i1043[3]
  i1042.m_InputActionsPerSecond = i1043[4]
  i1042.m_RepeatDelay = i1043[5]
  i1042.m_ForceModuleActive = !!i1043[6]
  i1042.m_SendPointerHoverToParent = !!i1043[7]
  return i1042
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1045 = data
  i1044.m_Spacing = i1045[0]
  i1044.m_ChildForceExpandWidth = !!i1045[1]
  i1044.m_ChildForceExpandHeight = !!i1045[2]
  i1044.m_ChildControlWidth = !!i1045[3]
  i1044.m_ChildControlHeight = !!i1045[4]
  i1044.m_ChildScaleWidth = !!i1045[5]
  i1044.m_ChildScaleHeight = !!i1045[6]
  i1044.m_ReverseArrangement = !!i1045[7]
  i1044.m_Padding = UnityEngine.RectOffset.FromPaddings(i1045[8], i1045[9], i1045[10], i1045[11])
  i1044.m_ChildAlignment = i1045[12]
  return i1044
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1047 = data
  i1046.m_Spacing = i1047[0]
  i1046.m_ChildForceExpandWidth = !!i1047[1]
  i1046.m_ChildForceExpandHeight = !!i1047[2]
  i1046.m_ChildControlWidth = !!i1047[3]
  i1046.m_ChildControlHeight = !!i1047[4]
  i1046.m_ChildScaleWidth = !!i1047[5]
  i1046.m_ChildScaleHeight = !!i1047[6]
  i1046.m_ReverseArrangement = !!i1047[7]
  i1046.m_Padding = UnityEngine.RectOffset.FromPaddings(i1047[8], i1047[9], i1047[10], i1047[11])
  i1046.m_ChildAlignment = i1047[12]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1049 = data
  i1048.cullTransparentMesh = !!i1049[0]
  return i1048
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.Image' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'm_Sprite')
  i1050.m_Type = i1051[2]
  i1050.m_PreserveAspect = !!i1051[3]
  i1050.m_FillCenter = !!i1051[4]
  i1050.m_FillMethod = i1051[5]
  i1050.m_FillAmount = i1051[6]
  i1050.m_FillClockwise = !!i1051[7]
  i1050.m_FillOrigin = i1051[8]
  i1050.m_UseSpriteMesh = !!i1051[9]
  i1050.m_PixelsPerUnitMultiplier = i1051[10]
  request.r(i1051[11], i1051[12], 0, i1050, 'm_Material')
  i1050.m_Maskable = !!i1051[13]
  i1050.m_Color = new pc.Color(i1051[14], i1051[15], i1051[16], i1051[17])
  i1050.m_RaycastTarget = !!i1051[18]
  i1050.m_RaycastPadding = new pc.Vec4( i1051[19], i1051[20], i1051[21], i1051[22] )
  return i1050
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.Button' )
  var i1053 = data
  i1052.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1053[0], i1052.m_OnClick)
  i1052.m_Navigation = request.d('UnityEngine.UI.Navigation', i1053[1], i1052.m_Navigation)
  i1052.m_Transition = i1053[2]
  i1052.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1053[3], i1052.m_Colors)
  i1052.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1053[4], i1052.m_SpriteState)
  i1052.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1053[5], i1052.m_AnimationTriggers)
  i1052.m_Interactable = !!i1053[6]
  request.r(i1053[7], i1053[8], 0, i1052, 'm_TargetGraphic')
  return i1052
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1055 = data
  i1054.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1055[0], i1054.m_PersistentCalls)
  return i1054
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('UnityEngine.Events.PersistentCall', i1059[i + 0]));
  }
  i1056.m_Calls = i1058
  return i1056
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'm_Target')
  i1062.m_TargetAssemblyTypeName = i1063[2]
  i1062.m_MethodName = i1063[3]
  i1062.m_Mode = i1063[4]
  i1062.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1063[5], i1062.m_Arguments)
  i1062.m_CallState = i1063[6]
  return i1062
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_ObjectArgument')
  i1064.m_ObjectArgumentAssemblyTypeName = i1065[2]
  i1064.m_IntArgument = i1065[3]
  i1064.m_FloatArgument = i1065[4]
  i1064.m_StringArgument = i1065[5]
  i1064.m_BoolArgument = !!i1065[6]
  return i1064
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1067 = data
  i1066.m_Mode = i1067[0]
  i1066.m_WrapAround = !!i1067[1]
  request.r(i1067[2], i1067[3], 0, i1066, 'm_SelectOnUp')
  request.r(i1067[4], i1067[5], 0, i1066, 'm_SelectOnDown')
  request.r(i1067[6], i1067[7], 0, i1066, 'm_SelectOnLeft')
  request.r(i1067[8], i1067[9], 0, i1066, 'm_SelectOnRight')
  return i1066
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1069 = data
  i1068.m_NormalColor = new pc.Color(i1069[0], i1069[1], i1069[2], i1069[3])
  i1068.m_HighlightedColor = new pc.Color(i1069[4], i1069[5], i1069[6], i1069[7])
  i1068.m_PressedColor = new pc.Color(i1069[8], i1069[9], i1069[10], i1069[11])
  i1068.m_SelectedColor = new pc.Color(i1069[12], i1069[13], i1069[14], i1069[15])
  i1068.m_DisabledColor = new pc.Color(i1069[16], i1069[17], i1069[18], i1069[19])
  i1068.m_ColorMultiplier = i1069[20]
  i1068.m_FadeDuration = i1069[21]
  return i1068
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'm_HighlightedSprite')
  request.r(i1071[2], i1071[3], 0, i1070, 'm_PressedSprite')
  request.r(i1071[4], i1071[5], 0, i1070, 'm_SelectedSprite')
  request.r(i1071[6], i1071[7], 0, i1070, 'm_DisabledSprite')
  return i1070
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1073 = data
  i1072.m_NormalTrigger = i1073[0]
  i1072.m_HighlightedTrigger = i1073[1]
  i1072.m_PressedTrigger = i1073[2]
  i1072.m_SelectedTrigger = i1073[3]
  i1072.m_DisabledTrigger = i1073[4]
  return i1072
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.Text' )
  var i1075 = data
  i1074.m_FontData = request.d('UnityEngine.UI.FontData', i1075[0], i1074.m_FontData)
  i1074.m_Text = i1075[1]
  request.r(i1075[2], i1075[3], 0, i1074, 'm_Material')
  i1074.m_Maskable = !!i1075[4]
  i1074.m_Color = new pc.Color(i1075[5], i1075[6], i1075[7], i1075[8])
  i1074.m_RaycastTarget = !!i1075[9]
  i1074.m_RaycastPadding = new pc.Vec4( i1075[10], i1075[11], i1075[12], i1075[13] )
  return i1074
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_Font')
  i1076.m_FontSize = i1077[2]
  i1076.m_FontStyle = i1077[3]
  i1076.m_BestFit = !!i1077[4]
  i1076.m_MinSize = i1077[5]
  i1076.m_MaxSize = i1077[6]
  i1076.m_Alignment = i1077[7]
  i1076.m_AlignByGeometry = !!i1077[8]
  i1076.m_RichText = !!i1077[9]
  i1076.m_HorizontalOverflow = i1077[10]
  i1076.m_VerticalOverflow = i1077[11]
  i1076.m_LineSpacing = i1077[12]
  return i1076
}

Deserializers["PlayableTestManager"] = function (request, data, root) {
  var i1078 = root || request.c( 'PlayableTestManager' )
  var i1079 = data
  i1078.blastRadius = i1079[0]
  i1078.forceMin = i1079[1]
  i1078.forceMax = i1079[2]
  i1078.ballCount = i1079[3]
  request.r(i1079[4], i1079[5], 0, i1078, 'forcePos')
  request.r(i1079[6], i1079[7], 0, i1078, 'instantiatePos')
  request.r(i1079[8], i1079[9], 0, i1078, 'ball')
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.isTrigger = !!i1081[1]
  request.r(i1081[2], i1081[3], 0, i1080, 'material')
  request.r(i1081[4], i1081[5], 0, i1080, 'sharedMesh')
  i1080.convex = !!i1081[6]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1083 = data
  i1082.ambientIntensity = i1083[0]
  i1082.reflectionIntensity = i1083[1]
  i1082.ambientMode = i1083[2]
  i1082.ambientLight = new pc.Color(i1083[3], i1083[4], i1083[5], i1083[6])
  i1082.ambientSkyColor = new pc.Color(i1083[7], i1083[8], i1083[9], i1083[10])
  i1082.ambientGroundColor = new pc.Color(i1083[11], i1083[12], i1083[13], i1083[14])
  i1082.ambientEquatorColor = new pc.Color(i1083[15], i1083[16], i1083[17], i1083[18])
  i1082.fogColor = new pc.Color(i1083[19], i1083[20], i1083[21], i1083[22])
  i1082.fogEndDistance = i1083[23]
  i1082.fogStartDistance = i1083[24]
  i1082.fogDensity = i1083[25]
  i1082.fog = !!i1083[26]
  request.r(i1083[27], i1083[28], 0, i1082, 'skybox')
  i1082.fogMode = i1083[29]
  var i1085 = i1083[30]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1085[i + 0]) );
  }
  i1082.lightmaps = i1084
  i1082.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1083[31], i1082.lightProbes)
  i1082.lightmapsMode = i1083[32]
  i1082.mixedBakeMode = i1083[33]
  i1082.environmentLightingMode = i1083[34]
  i1082.ambientProbe = new pc.SphericalHarmonicsL2(i1083[35])
  i1082.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1083[36])
  i1082.useReferenceAmbientProbe = !!i1083[37]
  request.r(i1083[38], i1083[39], 0, i1082, 'customReflection')
  request.r(i1083[40], i1083[41], 0, i1082, 'defaultReflection')
  i1082.defaultReflectionMode = i1083[42]
  i1082.defaultReflectionResolution = i1083[43]
  i1082.sunLightObjectId = i1083[44]
  i1082.pixelLightCount = i1083[45]
  i1082.defaultReflectionHDR = !!i1083[46]
  i1082.hasLightDataAsset = !!i1083[47]
  i1082.hasManualGenerate = !!i1083[48]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'lightmapColor')
  request.r(i1089[2], i1089[3], 0, i1088, 'lightmapDirection')
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1090 = root || new UnityEngine.LightProbes()
  var i1091 = data
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.bounciness = i1099[1]
  i1098.dynamicFriction = i1099[2]
  i1098.staticFriction = i1099[3]
  i1098.frictionCombine = i1099[4]
  i1098.bounceCombine = i1099[5]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1103[i + 0]));
  }
  i1100.ShaderCompilationErrors = i1102
  i1100.name = i1101[1]
  i1100.guid = i1101[2]
  var i1105 = i1101[3]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1100.shaderDefinedKeywords = i1104
  var i1107 = i1101[4]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1107[i + 0]) );
  }
  i1100.passes = i1106
  var i1109 = i1101[5]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1109[i + 0]) );
  }
  i1100.usePasses = i1108
  var i1111 = i1101[6]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1111[i + 0]) );
  }
  i1100.defaultParameterValues = i1110
  request.r(i1101[7], i1101[8], 0, i1100, 'unityFallbackShader')
  i1100.readDepth = !!i1101[9]
  i1100.isCreatedByShaderGraph = !!i1101[10]
  i1100.compiled = !!i1101[11]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1115 = data
  i1114.shaderName = i1115[0]
  i1114.errorMessage = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1120 = root || new pc.UnityShaderPass()
  var i1121 = data
  i1120.id = i1121[0]
  i1120.subShaderIndex = i1121[1]
  i1120.name = i1121[2]
  i1120.passType = i1121[3]
  i1120.grabPassTextureName = i1121[4]
  i1120.usePass = !!i1121[5]
  i1120.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[6], i1120.zTest)
  i1120.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[7], i1120.zWrite)
  i1120.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[8], i1120.culling)
  i1120.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1121[9], i1120.blending)
  i1120.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1121[10], i1120.alphaBlending)
  i1120.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[11], i1120.colorWriteMask)
  i1120.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[12], i1120.offsetUnits)
  i1120.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[13], i1120.offsetFactor)
  i1120.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[14], i1120.stencilRef)
  i1120.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[15], i1120.stencilReadMask)
  i1120.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[16], i1120.stencilWriteMask)
  i1120.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1121[17], i1120.stencilOp)
  i1120.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1121[18], i1120.stencilOpFront)
  i1120.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1121[19], i1120.stencilOpBack)
  var i1123 = i1121[20]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1123[i + 0]) );
  }
  i1120.tags = i1122
  var i1125 = i1121[21]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1120.passDefinedKeywords = i1124
  var i1127 = i1121[22]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1127[i + 0]) );
  }
  i1120.passDefinedKeywordGroups = i1126
  var i1129 = i1121[23]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1129[i + 0]) );
  }
  i1120.variants = i1128
  var i1131 = i1121[24]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1131[i + 0]) );
  }
  i1120.excludedVariants = i1130
  i1120.hasDepthReader = !!i1121[25]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1133 = data
  i1132.val = i1133[0]
  i1132.name = i1133[1]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1135 = data
  i1134.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[0], i1134.src)
  i1134.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[1], i1134.dst)
  i1134.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[2], i1134.op)
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1137 = data
  i1136.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[0], i1136.pass)
  i1136.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[1], i1136.fail)
  i1136.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[2], i1136.zFail)
  i1136.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[3], i1136.comp)
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.value = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1145 = data
  var i1147 = i1145[0]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( i1147[i + 0] );
  }
  i1144.keywords = i1146
  i1144.hasDiscard = !!i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1151 = data
  i1150.passId = i1151[0]
  i1150.subShaderIndex = i1151[1]
  var i1153 = i1151[2]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1150.keywords = i1152
  i1150.vertexProgram = i1151[3]
  i1150.fragmentProgram = i1151[4]
  i1150.exportedForWebGl2 = !!i1151[5]
  i1150.readDepth = !!i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'shader')
  i1156.pass = i1157[2]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1161 = data
  i1160.name = i1161[0]
  i1160.type = i1161[1]
  i1160.value = new pc.Vec4( i1161[2], i1161[3], i1161[4], i1161[5] )
  i1160.textureValue = i1161[6]
  i1160.shaderPropertyFlag = i1161[7]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1163 = data
  i1162.name = i1163[0]
  request.r(i1163[1], i1163[2], 0, i1162, 'texture')
  i1162.aabb = i1163[3]
  i1162.vertices = i1163[4]
  i1162.triangles = i1163[5]
  i1162.textureRect = UnityEngine.Rect.MinMaxRect(i1163[6], i1163[7], i1163[8], i1163[9])
  i1162.packedRect = UnityEngine.Rect.MinMaxRect(i1163[10], i1163[11], i1163[12], i1163[13])
  i1162.border = new pc.Vec4( i1163[14], i1163[15], i1163[16], i1163[17] )
  i1162.transparency = i1163[18]
  i1162.bounds = i1163[19]
  i1162.pixelsPerUnit = i1163[20]
  i1162.textureWidth = i1163[21]
  i1162.textureHeight = i1163[22]
  i1162.nativeSize = new pc.Vec2( i1163[23], i1163[24] )
  i1162.pivot = new pc.Vec2( i1163[25], i1163[26] )
  i1162.textureRectOffset = new pc.Vec2( i1163[27], i1163[28] )
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.ascent = i1165[1]
  i1164.originalLineHeight = i1165[2]
  i1164.fontSize = i1165[3]
  var i1167 = i1165[4]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1167[i + 0]) );
  }
  i1164.characterInfo = i1166
  request.r(i1165[5], i1165[6], 0, i1164, 'texture')
  i1164.originalFontSize = i1165[7]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1171 = data
  i1170.index = i1171[0]
  i1170.advance = i1171[1]
  i1170.bearing = i1171[2]
  i1170.glyphWidth = i1171[3]
  i1170.glyphHeight = i1171[4]
  i1170.minX = i1171[5]
  i1170.maxX = i1171[6]
  i1170.minY = i1171[7]
  i1170.maxY = i1171[8]
  i1170.uvBottomLeftX = i1171[9]
  i1170.uvBottomLeftY = i1171[10]
  i1170.uvBottomRightX = i1171[11]
  i1170.uvBottomRightY = i1171[12]
  i1170.uvTopLeftX = i1171[13]
  i1170.uvTopLeftY = i1171[14]
  i1170.uvTopRightX = i1171[15]
  i1170.uvTopRightY = i1171[16]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1175[i + 0]) );
  }
  i1172.files = i1174
  i1172.componentToPrefabIds = i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1179 = data
  i1178.path = i1179[0]
  request.r(i1179[1], i1179[2], 0, i1178, 'unityObject')
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1183[i + 0]) );
  }
  i1180.scriptsExecutionOrder = i1182
  var i1185 = i1181[1]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1185[i + 0]) );
  }
  i1180.sortingLayers = i1184
  var i1187 = i1181[2]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1187[i + 0]) );
  }
  i1180.cullingLayers = i1186
  i1180.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1181[3], i1180.timeSettings)
  i1180.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1181[4], i1180.physicsSettings)
  i1180.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1181[5], i1180.physics2DSettings)
  i1180.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1181[6], i1180.qualitySettings)
  i1180.enableRealtimeShadows = !!i1181[7]
  i1180.enableAutoInstancing = !!i1181[8]
  i1180.enableDynamicBatching = !!i1181[9]
  i1180.lightmapEncodingQuality = i1181[10]
  i1180.desiredColorSpace = i1181[11]
  var i1189 = i1181[12]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1180.allTags = i1188
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.value = i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1197 = data
  i1196.id = i1197[0]
  i1196.name = i1197[1]
  i1196.value = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.name = i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1203 = data
  i1202.fixedDeltaTime = i1203[0]
  i1202.maximumDeltaTime = i1203[1]
  i1202.timeScale = i1203[2]
  i1202.maximumParticleTimestep = i1203[3]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1205 = data
  i1204.gravity = new pc.Vec3( i1205[0], i1205[1], i1205[2] )
  i1204.defaultSolverIterations = i1205[3]
  i1204.bounceThreshold = i1205[4]
  i1204.autoSyncTransforms = !!i1205[5]
  i1204.autoSimulation = !!i1205[6]
  var i1207 = i1205[7]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1207[i + 0]) );
  }
  i1204.collisionMatrix = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1211 = data
  i1210.enabled = !!i1211[0]
  i1210.layerId = i1211[1]
  i1210.otherLayerId = i1211[2]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'material')
  i1212.gravity = new pc.Vec2( i1213[2], i1213[3] )
  i1212.positionIterations = i1213[4]
  i1212.velocityIterations = i1213[5]
  i1212.velocityThreshold = i1213[6]
  i1212.maxLinearCorrection = i1213[7]
  i1212.maxAngularCorrection = i1213[8]
  i1212.maxTranslationSpeed = i1213[9]
  i1212.maxRotationSpeed = i1213[10]
  i1212.baumgarteScale = i1213[11]
  i1212.baumgarteTOIScale = i1213[12]
  i1212.timeToSleep = i1213[13]
  i1212.linearSleepTolerance = i1213[14]
  i1212.angularSleepTolerance = i1213[15]
  i1212.defaultContactOffset = i1213[16]
  i1212.autoSimulation = !!i1213[17]
  i1212.queriesHitTriggers = !!i1213[18]
  i1212.queriesStartInColliders = !!i1213[19]
  i1212.callbacksOnDisable = !!i1213[20]
  i1212.reuseCollisionCallbacks = !!i1213[21]
  i1212.autoSyncTransforms = !!i1213[22]
  var i1215 = i1213[23]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1215[i + 0]) );
  }
  i1212.collisionMatrix = i1214
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1219 = data
  i1218.enabled = !!i1219[0]
  i1218.layerId = i1219[1]
  i1218.otherLayerId = i1219[2]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1223[i + 0]) );
  }
  i1220.qualityLevels = i1222
  var i1225 = i1221[1]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( i1225[i + 0] );
  }
  i1220.names = i1224
  i1220.shadows = i1221[2]
  i1220.anisotropicFiltering = i1221[3]
  i1220.antiAliasing = i1221[4]
  i1220.lodBias = i1221[5]
  i1220.shadowCascades = i1221[6]
  i1220.shadowDistance = i1221[7]
  i1220.shadowmaskMode = i1221[8]
  i1220.shadowProjection = i1221[9]
  i1220.shadowResolution = i1221[10]
  i1220.softParticles = !!i1221[11]
  i1220.softVegetation = !!i1221[12]
  i1220.activeColorSpace = i1221[13]
  i1220.desiredColorSpace = i1221[14]
  i1220.masterTextureLimit = i1221[15]
  i1220.maxQueuedFrames = i1221[16]
  i1220.particleRaycastBudget = i1221[17]
  i1220.pixelLightCount = i1221[18]
  i1220.realtimeReflectionProbes = !!i1221[19]
  i1220.shadowCascade2Split = i1221[20]
  i1220.shadowCascade4Split = new pc.Vec3( i1221[21], i1221[22], i1221[23] )
  i1220.streamingMipmapsActive = !!i1221[24]
  i1220.vSyncCount = i1221[25]
  i1220.asyncUploadBufferSize = i1221[26]
  i1220.asyncUploadTimeSlice = i1221[27]
  i1220.billboardsFaceCameraPosition = !!i1221[28]
  i1220.shadowNearPlaneOffset = i1221[29]
  i1220.streamingMipmapsMemoryBudget = i1221[30]
  i1220.maximumLODLevel = i1221[31]
  i1220.streamingMipmapsAddAllCameras = !!i1221[32]
  i1220.streamingMipmapsMaxLevelReduction = i1221[33]
  i1220.streamingMipmapsRenderersPerFrame = i1221[34]
  i1220.resolutionScalingFixedDPIFactor = i1221[35]
  i1220.streamingMipmapsMaxFileIORequests = i1221[36]
  i1220.currentQualityLevel = i1221[37]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1231 = data
  i1230.weight = i1231[0]
  i1230.vertices = i1231[1]
  i1230.normals = i1231[2]
  i1230.tangents = i1231[3]
  return i1230
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[9],"43":[8],"44":[8],"45":[8],"46":[8],"47":[8],"48":[8],"49":[8],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[51],"59":[51],"60":[51],"61":[51],"62":[51],"63":[51],"64":[9],"65":[4],"66":[67],"68":[67],"13":[12],"69":[12],"70":[12],"16":[13],"22":[21,12],"71":[12],"15":[13],"72":[12],"73":[12],"20":[12],"74":[12],"75":[12],"76":[12],"19":[12],"77":[12],"78":[12],"79":[21,12],"80":[12],"81":[12],"82":[12],"83":[12],"26":[21,12],"84":[12],"85":[17],"86":[17],"18":[17],"87":[17],"88":[9],"89":[9],"90":[12],"91":[4,12],"92":[12,21],"93":[12],"94":[21,12],"95":[4],"96":[21,12],"97":[12],"98":[99],"100":[99],"101":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","PlayableTestManager","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MonoBehaviour","UnityEngine.GameObject","UnityEngine.MeshCollider","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.39f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "02/13/2025 12:27:01";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1624";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2820";

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

Deserializers.buildID = "3dbc2edb-dd33-4f12-8354-4a2b94418561";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

