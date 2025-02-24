var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointSpring' )
  var i475 = data
  i474.spring = i475[0]
  i474.damper = i475[1]
  i474.targetPosition = i475[2]
  return i474
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointMotor' )
  var i477 = data
  i476.m_TargetVelocity = i477[0]
  i476.m_Force = i477[1]
  i476.m_FreeSpin = i477[2]
  return i476
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointLimits' )
  var i479 = data
  i478.m_Min = i479[0]
  i478.m_Max = i479[1]
  i478.m_Bounciness = i479[2]
  i478.m_BounceMinVelocity = i479[3]
  i478.m_ContactDistance = i479[4]
  i478.minBounce = i479[5]
  i478.maxBounce = i479[6]
  return i478
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointDrive' )
  var i481 = data
  i480.m_PositionSpring = i481[0]
  i480.m_PositionDamper = i481[1]
  i480.m_MaximumForce = i481[2]
  i480.m_UseAcceleration = i481[3]
  return i480
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i483 = data
  i482.m_Spring = i483[0]
  i482.m_Damper = i483[1]
  return i482
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i485 = data
  i484.m_Limit = i485[0]
  i484.m_Bounciness = i485[1]
  i484.m_ContactDistance = i485[2]
  return i484
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i487 = data
  i486.m_ExtremumSlip = i487[0]
  i486.m_ExtremumValue = i487[1]
  i486.m_AsymptoteSlip = i487[2]
  i486.m_AsymptoteValue = i487[3]
  i486.m_Stiffness = i487[4]
  return i486
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i489 = data
  i488.m_LowerAngle = i489[0]
  i488.m_UpperAngle = i489[1]
  return i488
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i491 = data
  i490.m_MotorSpeed = i491[0]
  i490.m_MaximumMotorTorque = i491[1]
  return i490
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i493 = data
  i492.m_DampingRatio = i493[0]
  i492.m_Frequency = i493[1]
  i492.m_Angle = i493[2]
  return i492
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i495 = data
  i494.m_LowerTranslation = i495[0]
  i494.m_UpperTranslation = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i496 = root || new pc.UnityMaterial()
  var i497 = data
  i496.name = i497[0]
  request.r(i497[1], i497[2], 0, i496, 'shader')
  i496.renderQueue = i497[3]
  i496.enableInstancing = !!i497[4]
  var i499 = i497[5]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i499[i + 0]) );
  }
  i496.floatParameters = i498
  var i501 = i497[6]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i501[i + 0]) );
  }
  i496.colorParameters = i500
  var i503 = i497[7]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i503[i + 0]) );
  }
  i496.vectorParameters = i502
  var i505 = i497[8]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i505[i + 0]) );
  }
  i496.textureParameters = i504
  var i507 = i497[9]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i507[i + 0]) );
  }
  i496.materialFlags = i506
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i511 = data
  i510.name = i511[0]
  i510.value = i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = new pc.Color(i515[1], i515[2], i515[3], i515[4])
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = new pc.Vec4( i519[1], i519[2], i519[3], i519[4] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i523 = data
  i522.name = i523[0]
  request.r(i523[1], i523[2], 0, i522, 'value')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i527 = data
  i526.name = i527[0]
  i526.enabled = !!i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i529 = data
  i528.name = i529[0]
  i528.width = i529[1]
  i528.height = i529[2]
  i528.mipmapCount = i529[3]
  i528.anisoLevel = i529[4]
  i528.filterMode = i529[5]
  i528.hdr = !!i529[6]
  i528.format = i529[7]
  i528.wrapMode = i529[8]
  i528.alphaIsTransparency = !!i529[9]
  i528.alphaSource = i529[10]
  i528.graphicsFormat = i529[11]
  i528.sRGBTexture = !!i529[12]
  i528.desiredColorSpace = i529[13]
  i528.wrapU = i529[14]
  i528.wrapV = i529[15]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i531 = data
  i530.position = new pc.Vec3( i531[0], i531[1], i531[2] )
  i530.scale = new pc.Vec3( i531[3], i531[4], i531[5] )
  i530.rotation = new pc.Quat(i531[6], i531[7], i531[8], i531[9])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i533 = data
  i532.center = new pc.Vec3( i533[0], i533[1], i533[2] )
  i532.size = new pc.Vec3( i533[3], i533[4], i533[5] )
  i532.enabled = !!i533[6]
  i532.isTrigger = !!i533[7]
  request.r(i533[8], i533[9], 0, i532, 'material')
  return i532
}

Deserializers["GameActionButton"] = function (request, data, root) {
  var i534 = root || request.c( 'GameActionButton' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'gameManager')
  request.r(i535[2], i535[3], 0, i534, 'holder')
  i534.gameActionButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i535[4] )
  i534.moveUpY = i535[5]
  i534.moveDownY = i535[6]
  request.r(i535[7], i535[8], 0, i534, 'textureGin')
  request.r(i535[9], i535[10], 0, i534, 'texturePass')
  request.r(i535[11], i535[12], 0, i534, 'textureKnock')
  request.r(i535[13], i535[14], 0, i534, 'buttonMeshRenderer')
  request.r(i535[15], i535[16], 0, i534, 'buttonTransform')
  request.r(i535[17], i535[18], 0, i534, 'knockValueText')
  i534.rayDistance = i535[19]
  request.r(i535[20], i535[21], 0, i534, 'shadowSpriteRenderer')
  request.r(i535[22], i535[23], 0, i534, 'shadowTransform')
  request.r(i535[24], i535[25], 0, i534, 'frameSpriteRenderer')
  request.r(i535[26], i535[27], 0, i534, 'effectSpriteRenderer')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'sharedMesh')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'additionalVertexStreams')
  i538.enabled = !!i539[2]
  request.r(i539[3], i539[4], 0, i538, 'sharedMaterial')
  var i541 = i539[5]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.sharedMaterials = i540
  i538.receiveShadows = !!i539[6]
  i538.shadowCastingMode = i539[7]
  i538.sortingLayerID = i539[8]
  i538.sortingOrder = i539[9]
  i538.lightmapIndex = i539[10]
  i538.lightmapSceneIndex = i539[11]
  i538.lightmapScaleOffset = new pc.Vec4( i539[12], i539[13], i539[14], i539[15] )
  i538.lightProbeUsage = i539[16]
  i538.reflectionProbeUsage = i539[17]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i545 = data
  i544.name = i545[0]
  i544.tagId = i545[1]
  i544.enabled = !!i545[2]
  i544.isStatic = !!i545[3]
  i544.layer = i545[4]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i547 = data
  i546.pivot = new pc.Vec2( i547[0], i547[1] )
  i546.anchorMin = new pc.Vec2( i547[2], i547[3] )
  i546.anchorMax = new pc.Vec2( i547[4], i547[5] )
  i546.sizeDelta = new pc.Vec2( i547[6], i547[7] )
  i546.anchoredPosition3D = new pc.Vec3( i547[8], i547[9], i547[10] )
  i546.rotation = new pc.Quat(i547[11], i547[12], i547[13], i547[14])
  i546.scale = new pc.Vec3( i547[15], i547[16], i547[17] )
  return i546
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i548 = root || request.c( 'TMPro.TextMeshPro' )
  var i549 = data
  i548._SortingLayer = i549[0]
  i548._SortingLayerID = i549[1]
  i548._SortingOrder = i549[2]
  i548.m_hasFontAssetChanged = !!i549[3]
  request.r(i549[4], i549[5], 0, i548, 'm_renderer')
  i548.m_maskType = i549[6]
  i548.m_text = i549[7]
  i548.m_isRightToLeft = !!i549[8]
  request.r(i549[9], i549[10], 0, i548, 'm_fontAsset')
  request.r(i549[11], i549[12], 0, i548, 'm_sharedMaterial')
  var i551 = i549[13]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.m_fontSharedMaterials = i550
  request.r(i549[14], i549[15], 0, i548, 'm_fontMaterial')
  var i553 = i549[16]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i548.m_fontMaterials = i552
  i548.m_fontColor32 = UnityEngine.Color32.ConstructColor(i549[17], i549[18], i549[19], i549[20])
  i548.m_fontColor = new pc.Color(i549[21], i549[22], i549[23], i549[24])
  i548.m_enableVertexGradient = !!i549[25]
  i548.m_colorMode = i549[26]
  i548.m_fontColorGradient = request.d('TMPro.VertexGradient', i549[27], i548.m_fontColorGradient)
  request.r(i549[28], i549[29], 0, i548, 'm_fontColorGradientPreset')
  request.r(i549[30], i549[31], 0, i548, 'm_spriteAsset')
  i548.m_tintAllSprites = !!i549[32]
  request.r(i549[33], i549[34], 0, i548, 'm_StyleSheet')
  i548.m_TextStyleHashCode = i549[35]
  i548.m_overrideHtmlColors = !!i549[36]
  i548.m_faceColor = UnityEngine.Color32.ConstructColor(i549[37], i549[38], i549[39], i549[40])
  i548.m_fontSize = i549[41]
  i548.m_fontSizeBase = i549[42]
  i548.m_fontWeight = i549[43]
  i548.m_enableAutoSizing = !!i549[44]
  i548.m_fontSizeMin = i549[45]
  i548.m_fontSizeMax = i549[46]
  i548.m_fontStyle = i549[47]
  i548.m_HorizontalAlignment = i549[48]
  i548.m_VerticalAlignment = i549[49]
  i548.m_textAlignment = i549[50]
  i548.m_characterSpacing = i549[51]
  i548.m_wordSpacing = i549[52]
  i548.m_lineSpacing = i549[53]
  i548.m_lineSpacingMax = i549[54]
  i548.m_paragraphSpacing = i549[55]
  i548.m_charWidthMaxAdj = i549[56]
  i548.m_enableWordWrapping = !!i549[57]
  i548.m_wordWrappingRatios = i549[58]
  i548.m_overflowMode = i549[59]
  request.r(i549[60], i549[61], 0, i548, 'm_linkedTextComponent')
  request.r(i549[62], i549[63], 0, i548, 'parentLinkedComponent')
  i548.m_enableKerning = !!i549[64]
  i548.m_enableExtraPadding = !!i549[65]
  i548.checkPaddingRequired = !!i549[66]
  i548.m_isRichText = !!i549[67]
  i548.m_parseCtrlCharacters = !!i549[68]
  i548.m_isOrthographic = !!i549[69]
  i548.m_isCullingEnabled = !!i549[70]
  i548.m_horizontalMapping = i549[71]
  i548.m_verticalMapping = i549[72]
  i548.m_uvLineOffset = i549[73]
  i548.m_geometrySortingOrder = i549[74]
  i548.m_IsTextObjectScaleStatic = !!i549[75]
  i548.m_VertexBufferAutoSizeReduction = !!i549[76]
  i548.m_useMaxVisibleDescender = !!i549[77]
  i548.m_pageToDisplay = i549[78]
  i548.m_margin = new pc.Vec4( i549[79], i549[80], i549[81], i549[82] )
  i548.m_isUsingLegacyAnimationComponent = !!i549[83]
  i548.m_isVolumetricText = !!i549[84]
  request.r(i549[85], i549[86], 0, i548, 'm_Material')
  i548.m_Maskable = !!i549[87]
  i548.m_Color = new pc.Color(i549[88], i549[89], i549[90], i549[91])
  i548.m_RaycastTarget = !!i549[92]
  i548.m_RaycastPadding = new pc.Vec4( i549[93], i549[94], i549[95], i549[96] )
  return i548
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i554 = root || request.c( 'TMPro.VertexGradient' )
  var i555 = data
  i554.topLeft = new pc.Color(i555[0], i555[1], i555[2], i555[3])
  i554.topRight = new pc.Color(i555[4], i555[5], i555[6], i555[7])
  i554.bottomLeft = new pc.Color(i555[8], i555[9], i555[10], i555[11])
  i554.bottomRight = new pc.Color(i555[12], i555[13], i555[14], i555[15])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i557 = data
  i556.enabled = !!i557[0]
  request.r(i557[1], i557[2], 0, i556, 'sharedMaterial')
  var i559 = i557[3]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.sharedMaterials = i558
  i556.receiveShadows = !!i557[4]
  i556.shadowCastingMode = i557[5]
  i556.sortingLayerID = i557[6]
  i556.sortingOrder = i557[7]
  i556.lightmapIndex = i557[8]
  i556.lightmapSceneIndex = i557[9]
  i556.lightmapScaleOffset = new pc.Vec4( i557[10], i557[11], i557[12], i557[13] )
  i556.lightProbeUsage = i557[14]
  i556.reflectionProbeUsage = i557[15]
  i556.color = new pc.Color(i557[16], i557[17], i557[18], i557[19])
  request.r(i557[20], i557[21], 0, i556, 'sprite')
  i556.flipX = !!i557[22]
  i556.flipY = !!i557[23]
  i556.drawMode = i557[24]
  i556.size = new pc.Vec2( i557[25], i557[26] )
  i556.tileMode = i557[27]
  i556.adaptiveModeThreshold = i557[28]
  i556.maskInteraction = i557[29]
  i556.spriteSortPoint = i557[30]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i561 = data
  i560.name = i561[0]
  i560.halfPrecision = !!i561[1]
  i560.useUInt32IndexFormat = !!i561[2]
  i560.vertexCount = i561[3]
  i560.aabb = i561[4]
  var i563 = i561[5]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( !!i563[i + 0] );
  }
  i560.streams = i562
  i560.vertices = i561[6]
  var i565 = i561[7]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i565[i + 0]) );
  }
  i560.subMeshes = i564
  var i567 = i561[8]
  var i566 = []
  for(var i = 0; i < i567.length; i += 16) {
    i566.push( new pc.Mat4().setData(i567[i + 0], i567[i + 1], i567[i + 2], i567[i + 3],  i567[i + 4], i567[i + 5], i567[i + 6], i567[i + 7],  i567[i + 8], i567[i + 9], i567[i + 10], i567[i + 11],  i567[i + 12], i567[i + 13], i567[i + 14], i567[i + 15]) );
  }
  i560.bindposes = i566
  var i569 = i561[9]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i569[i + 0]) );
  }
  i560.blendShapes = i568
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i575 = data
  i574.triangles = i575[0]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i581 = data
  i580.name = i581[0]
  var i583 = i581[1]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i583[i + 0]) );
  }
  i580.frames = i582
  return i580
}

Deserializers["Card"] = function (request, data, root) {
  var i584 = root || request.c( 'Card' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'frontRenderer')
  request.r(i585[2], i585[3], 0, i584, 'backRenderer')
  request.r(i585[4], i585[5], 0, i584, 'shadowHandRenderer')
  request.r(i585[6], i585[7], 0, i584, 'shadowDeckRenderer')
  request.r(i585[8], i585[9], 0, i584, 'shadowThrowRenderer')
  request.r(i585[10], i585[11], 0, i584, 'shadowMeldingRenderer')
  request.r(i585[12], i585[13], 0, i584, 'shadowOutline')
  request.r(i585[14], i585[15], 0, i584, 'layOffOutline')
  request.r(i585[16], i585[17], 0, i584, 'container')
  var i587 = i585[18]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sprites = i586
  request.r(i585[19], i585[20], 0, i584, 'highlightRenderer')
  var i589 = i585[21]
  var i588 = []
  for(var i = 0; i < i589.length; i += 4) {
    i588.push( new pc.Color(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3]) );
  }
  i584.highlightColors = i588
  i584.blockedColor = new pc.Color(i585[22], i585[23], i585[24], i585[25])
  i584.nonBlockedColor = new pc.Color(i585[26], i585[27], i585[28], i585[29])
  request.r(i585[30], i585[31], 0, i584, 'boxCollider')
  var i591 = i585[32]
  var i590 = []
  for(var i = 0; i < i591.length; i += 4) {
    i590.push( new pc.Color(i591[i + 0], i591[i + 1], i591[i + 2], i591[i + 3]) );
  }
  i584.layOffColors = i590
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i597 = data
  i596.name = i597[0]
  i596.atlasId = i597[1]
  i596.mipmapCount = i597[2]
  i596.hdr = !!i597[3]
  i596.size = i597[4]
  i596.anisoLevel = i597[5]
  i596.filterMode = i597[6]
  var i599 = i597[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 4) {
    i598.push( UnityEngine.Rect.MinMaxRect(i599[i + 0], i599[i + 1], i599[i + 2], i599[i + 3]) );
  }
  i596.rects = i598
  i596.wrapU = i597[8]
  i596.wrapV = i597[9]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i603 = data
  i602.name = i603[0]
  i602.index = i603[1]
  i602.startup = !!i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.aspect = i605[1]
  i604.orthographic = !!i605[2]
  i604.orthographicSize = i605[3]
  i604.backgroundColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.nearClipPlane = i605[8]
  i604.farClipPlane = i605[9]
  i604.fieldOfView = i605[10]
  i604.depth = i605[11]
  i604.clearFlags = i605[12]
  i604.cullingMask = i605[13]
  i604.rect = i605[14]
  request.r(i605[15], i605[16], 0, i604, 'targetTexture')
  i604.usePhysicalProperties = !!i605[17]
  i604.focalLength = i605[18]
  i604.sensorSize = new pc.Vec2( i605[19], i605[20] )
  i604.lensShift = new pc.Vec2( i605[21], i605[22] )
  i604.gateFit = i605[23]
  i604.commandBufferCount = i605[24]
  i604.cameraType = i605[25]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i607 = data
  i606.enabled = !!i607[0]
  i606.planeDistance = i607[1]
  i606.referencePixelsPerUnit = i607[2]
  i606.isFallbackOverlay = !!i607[3]
  i606.renderMode = i607[4]
  i606.renderOrder = i607[5]
  i606.sortingLayerName = i607[6]
  i606.sortingOrder = i607[7]
  i606.scaleFactor = i607[8]
  request.r(i607[9], i607[10], 0, i606, 'worldCamera')
  i606.overrideSorting = !!i607[11]
  i606.pixelPerfect = !!i607[12]
  i606.targetDisplay = i607[13]
  i606.overridePixelPerfect = !!i607[14]
  return i606
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i609 = data
  i608.m_UiScaleMode = i609[0]
  i608.m_ReferencePixelsPerUnit = i609[1]
  i608.m_ScaleFactor = i609[2]
  i608.m_ReferenceResolution = new pc.Vec2( i609[3], i609[4] )
  i608.m_ScreenMatchMode = i609[5]
  i608.m_MatchWidthOrHeight = i609[6]
  i608.m_PhysicalUnit = i609[7]
  i608.m_FallbackScreenDPI = i609[8]
  i608.m_DefaultSpriteDPI = i609[9]
  i608.m_DynamicPixelsPerUnit = i609[10]
  i608.m_PresetInfoIsWorld = !!i609[11]
  return i608
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i611 = data
  i610.m_IgnoreReversedGraphics = !!i611[0]
  i610.m_BlockingObjects = i611[1]
  i610.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i611[2] )
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i613 = data
  i612.cullTransparentMesh = !!i613[0]
  return i612
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.Image' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_Sprite')
  i614.m_Type = i615[2]
  i614.m_PreserveAspect = !!i615[3]
  i614.m_FillCenter = !!i615[4]
  i614.m_FillMethod = i615[5]
  i614.m_FillAmount = i615[6]
  i614.m_FillClockwise = !!i615[7]
  i614.m_FillOrigin = i615[8]
  i614.m_UseSpriteMesh = !!i615[9]
  i614.m_PixelsPerUnitMultiplier = i615[10]
  request.r(i615[11], i615[12], 0, i614, 'm_Material')
  i614.m_Maskable = !!i615[13]
  i614.m_Color = new pc.Color(i615[14], i615[15], i615[16], i615[17])
  i614.m_RaycastTarget = !!i615[18]
  i614.m_RaycastPadding = new pc.Vec4( i615[19], i615[20], i615[21], i615[22] )
  return i614
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Button' )
  var i617 = data
  i616.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i617[0], i616.m_OnClick)
  i616.m_Navigation = request.d('UnityEngine.UI.Navigation', i617[1], i616.m_Navigation)
  i616.m_Transition = i617[2]
  i616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i617[3], i616.m_Colors)
  i616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i617[4], i616.m_SpriteState)
  i616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i617[5], i616.m_AnimationTriggers)
  i616.m_Interactable = !!i617[6]
  request.r(i617[7], i617[8], 0, i616, 'm_TargetGraphic')
  return i616
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i619 = data
  i618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i619[0], i618.m_PersistentCalls)
  return i618
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i621 = data
  var i623 = i621[0]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i623.length; i += 1) {
    i622.add(request.d('UnityEngine.Events.PersistentCall', i623[i + 0]));
  }
  i620.m_Calls = i622
  return i620
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_Target')
  i626.m_TargetAssemblyTypeName = i627[2]
  i626.m_MethodName = i627[3]
  i626.m_Mode = i627[4]
  i626.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i627[5], i626.m_Arguments)
  i626.m_CallState = i627[6]
  return i626
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_ObjectArgument')
  i628.m_ObjectArgumentAssemblyTypeName = i629[2]
  i628.m_IntArgument = i629[3]
  i628.m_FloatArgument = i629[4]
  i628.m_StringArgument = i629[5]
  i628.m_BoolArgument = !!i629[6]
  return i628
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i631 = data
  i630.m_Mode = i631[0]
  i630.m_WrapAround = !!i631[1]
  request.r(i631[2], i631[3], 0, i630, 'm_SelectOnUp')
  request.r(i631[4], i631[5], 0, i630, 'm_SelectOnDown')
  request.r(i631[6], i631[7], 0, i630, 'm_SelectOnLeft')
  request.r(i631[8], i631[9], 0, i630, 'm_SelectOnRight')
  return i630
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i633 = data
  i632.m_NormalColor = new pc.Color(i633[0], i633[1], i633[2], i633[3])
  i632.m_HighlightedColor = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.m_PressedColor = new pc.Color(i633[8], i633[9], i633[10], i633[11])
  i632.m_SelectedColor = new pc.Color(i633[12], i633[13], i633[14], i633[15])
  i632.m_DisabledColor = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  i632.m_ColorMultiplier = i633[20]
  i632.m_FadeDuration = i633[21]
  return i632
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_HighlightedSprite')
  request.r(i635[2], i635[3], 0, i634, 'm_PressedSprite')
  request.r(i635[4], i635[5], 0, i634, 'm_SelectedSprite')
  request.r(i635[6], i635[7], 0, i634, 'm_DisabledSprite')
  return i634
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i637 = data
  i636.m_NormalTrigger = i637[0]
  i636.m_HighlightedTrigger = i637[1]
  i636.m_PressedTrigger = i637[2]
  i636.m_SelectedTrigger = i637[3]
  i636.m_DisabledTrigger = i637[4]
  return i636
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i638 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i639 = data
  i638.m_hasFontAssetChanged = !!i639[0]
  request.r(i639[1], i639[2], 0, i638, 'm_baseMaterial')
  i638.m_maskOffset = new pc.Vec4( i639[3], i639[4], i639[5], i639[6] )
  i638.m_text = i639[7]
  i638.m_isRightToLeft = !!i639[8]
  request.r(i639[9], i639[10], 0, i638, 'm_fontAsset')
  request.r(i639[11], i639[12], 0, i638, 'm_sharedMaterial')
  var i641 = i639[13]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.m_fontSharedMaterials = i640
  request.r(i639[14], i639[15], 0, i638, 'm_fontMaterial')
  var i643 = i639[16]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i638.m_fontMaterials = i642
  i638.m_fontColor32 = UnityEngine.Color32.ConstructColor(i639[17], i639[18], i639[19], i639[20])
  i638.m_fontColor = new pc.Color(i639[21], i639[22], i639[23], i639[24])
  i638.m_enableVertexGradient = !!i639[25]
  i638.m_colorMode = i639[26]
  i638.m_fontColorGradient = request.d('TMPro.VertexGradient', i639[27], i638.m_fontColorGradient)
  request.r(i639[28], i639[29], 0, i638, 'm_fontColorGradientPreset')
  request.r(i639[30], i639[31], 0, i638, 'm_spriteAsset')
  i638.m_tintAllSprites = !!i639[32]
  request.r(i639[33], i639[34], 0, i638, 'm_StyleSheet')
  i638.m_TextStyleHashCode = i639[35]
  i638.m_overrideHtmlColors = !!i639[36]
  i638.m_faceColor = UnityEngine.Color32.ConstructColor(i639[37], i639[38], i639[39], i639[40])
  i638.m_fontSize = i639[41]
  i638.m_fontSizeBase = i639[42]
  i638.m_fontWeight = i639[43]
  i638.m_enableAutoSizing = !!i639[44]
  i638.m_fontSizeMin = i639[45]
  i638.m_fontSizeMax = i639[46]
  i638.m_fontStyle = i639[47]
  i638.m_HorizontalAlignment = i639[48]
  i638.m_VerticalAlignment = i639[49]
  i638.m_textAlignment = i639[50]
  i638.m_characterSpacing = i639[51]
  i638.m_wordSpacing = i639[52]
  i638.m_lineSpacing = i639[53]
  i638.m_lineSpacingMax = i639[54]
  i638.m_paragraphSpacing = i639[55]
  i638.m_charWidthMaxAdj = i639[56]
  i638.m_enableWordWrapping = !!i639[57]
  i638.m_wordWrappingRatios = i639[58]
  i638.m_overflowMode = i639[59]
  request.r(i639[60], i639[61], 0, i638, 'm_linkedTextComponent')
  request.r(i639[62], i639[63], 0, i638, 'parentLinkedComponent')
  i638.m_enableKerning = !!i639[64]
  i638.m_enableExtraPadding = !!i639[65]
  i638.checkPaddingRequired = !!i639[66]
  i638.m_isRichText = !!i639[67]
  i638.m_parseCtrlCharacters = !!i639[68]
  i638.m_isOrthographic = !!i639[69]
  i638.m_isCullingEnabled = !!i639[70]
  i638.m_horizontalMapping = i639[71]
  i638.m_verticalMapping = i639[72]
  i638.m_uvLineOffset = i639[73]
  i638.m_geometrySortingOrder = i639[74]
  i638.m_IsTextObjectScaleStatic = !!i639[75]
  i638.m_VertexBufferAutoSizeReduction = !!i639[76]
  i638.m_useMaxVisibleDescender = !!i639[77]
  i638.m_pageToDisplay = i639[78]
  i638.m_margin = new pc.Vec4( i639[79], i639[80], i639[81], i639[82] )
  i638.m_isUsingLegacyAnimationComponent = !!i639[83]
  i638.m_isVolumetricText = !!i639[84]
  request.r(i639[85], i639[86], 0, i638, 'm_Material')
  i638.m_Maskable = !!i639[87]
  i638.m_Color = new pc.Color(i639[88], i639[89], i639[90], i639[91])
  i638.m_RaycastTarget = !!i639[92]
  i638.m_RaycastPadding = new pc.Vec4( i639[93], i639[94], i639[95], i639[96] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i645 = data
  i644.enabled = !!i645[0]
  i644.type = i645[1]
  i644.color = new pc.Color(i645[2], i645[3], i645[4], i645[5])
  i644.cullingMask = i645[6]
  i644.intensity = i645[7]
  i644.range = i645[8]
  i644.spotAngle = i645[9]
  i644.shadows = i645[10]
  i644.shadowNormalBias = i645[11]
  i644.shadowBias = i645[12]
  i644.shadowStrength = i645[13]
  i644.shadowResolution = i645[14]
  i644.lightmapBakeType = i645[15]
  i644.renderMode = i645[16]
  request.r(i645[17], i645[18], 0, i644, 'cookie')
  i644.cookieSize = i645[19]
  return i644
}

Deserializers["GameManager"] = function (request, data, root) {
  var i646 = root || request.c( 'GameManager' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'playCanvas')
  request.r(i647[2], i647[3], 0, i646, 'endCanvas')
  return i646
}

Deserializers["CardLayer"] = function (request, data, root) {
  var i648 = root || request.c( 'CardLayer' )
  var i649 = data
  i648.myTurn = !!i649[0]
  i648.straightGin = i649[1]
  i648.discardedCards = i649[2]
  i648.handStartCards = i649[3]
  i648.deckCards = i649[4]
  i648.opponentThrowCardNo = i649[5]
  i648.opponentPlay = i649[6]
  i648.opponentWinConditionTargetPlayIndex = i649[7]
  request.r(i649[8], i649[9], 0, i648, 'cardPool')
  request.r(i649[10], i649[11], 0, i648, 'handController')
  request.r(i649[12], i649[13], 0, i648, 'deckController')
  request.r(i649[14], i649[15], 0, i648, 'throwController')
  request.r(i649[16], i649[17], 0, i648, 'dragController')
  request.r(i649[18], i649[19], 0, i648, 'opponentController')
  request.r(i649[20], i649[21], 0, i648, 'gameActionButton')
  i648._opponentPlayCounter = i649[22]
  i648.pickDelay = i649[23]
  i648.throwDelay = i649[24]
  i648.cardsStartCount = i649[25]
  return i648
}

Deserializers["CardPool"] = function (request, data, root) {
  var i650 = root || request.c( 'CardPool' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'cardPrefab')
  return i650
}

Deserializers["HandController"] = function (request, data, root) {
  var i652 = root || request.c( 'HandController' )
  var i653 = data
  i652.sortingOrderMultiplier = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'slotPrefab')
  var i655 = i653[3]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 1, i654, '')
  }
  i652.slotsPool = i654
  i652.duration = i653[4]
  i652.ease = i653[5]
  return i652
}

Deserializers["HandSlotArc"] = function (request, data, root) {
  var i658 = root || request.c( 'HandSlotArc' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'handSettingsSo')
  return i658
}

Deserializers["DragController"] = function (request, data, root) {
  var i660 = root || request.c( 'DragController' )
  var i661 = data
  i660.lastPickedCardFromThrowZoneNo = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'draggingCard')
  i660.fullDisable = !!i661[3]
  i660.canFreeControl = !!i661[4]
  i660.canPickCardFromDeck = !!i661[5]
  i660.canPickCardFromThrow = !!i661[6]
  i660.canThrowCard = !!i661[7]
  request.r(i661[8], i661[9], 0, i660, 'gameCamera')
  i660.planeMask = UnityEngine.LayerMask.FromIntegerValue( i661[10] )
  i660.cardMask = UnityEngine.LayerMask.FromIntegerValue( i661[11] )
  request.r(i661[12], i661[13], 0, i660, 'slot')
  request.r(i661[14], i661[15], 0, i660, 'handEdge')
  return i660
}

Deserializers["ThrowController"] = function (request, data, root) {
  var i662 = root || request.c( 'ThrowController' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'slotPrefab')
  i662.offset = new pc.Vec3( i663[2], i663[3], i663[4] )
  i662.duration = i663[5]
  i662.ease = i663[6]
  i662.sortingOrderMultiplier = i663[7]
  var i665 = i663[8]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.slotPool = i664
  return i662
}

Deserializers["DeckController"] = function (request, data, root) {
  var i666 = root || request.c( 'DeckController' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'slotPrefab')
  i666.offset = new pc.Vec3( i667[2], i667[3], i667[4] )
  i666.sortingOrderMultiplier = i667[5]
  var i669 = i667[6]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 1, i668, '')
  }
  i666.slotPool = i668
  return i666
}

Deserializers["OpponentController"] = function (request, data, root) {
  var i670 = root || request.c( 'OpponentController' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'slotPrefab')
  i670.duration = i671[2]
  i670.ease = i671[3]
  i670.sortingOrderMultiplier = i671[4]
  var i673 = i671[5]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 1, i672, '')
  }
  i670.slotPool = i672
  return i670
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_FirstSelected')
  i674.m_sendNavigationEvents = !!i675[2]
  i674.m_DragThreshold = i675[3]
  return i674
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i677 = data
  i676.m_HorizontalAxis = i677[0]
  i676.m_VerticalAxis = i677[1]
  i676.m_SubmitButton = i677[2]
  i676.m_CancelButton = i677[3]
  i676.m_InputActionsPerSecond = i677[4]
  i676.m_RepeatDelay = i677[5]
  i676.m_ForceModuleActive = !!i677[6]
  i676.m_SendPointerHoverToParent = !!i677[7]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i679 = data
  i678.ambientIntensity = i679[0]
  i678.reflectionIntensity = i679[1]
  i678.ambientMode = i679[2]
  i678.ambientLight = new pc.Color(i679[3], i679[4], i679[5], i679[6])
  i678.ambientSkyColor = new pc.Color(i679[7], i679[8], i679[9], i679[10])
  i678.ambientGroundColor = new pc.Color(i679[11], i679[12], i679[13], i679[14])
  i678.ambientEquatorColor = new pc.Color(i679[15], i679[16], i679[17], i679[18])
  i678.fogColor = new pc.Color(i679[19], i679[20], i679[21], i679[22])
  i678.fogEndDistance = i679[23]
  i678.fogStartDistance = i679[24]
  i678.fogDensity = i679[25]
  i678.fog = !!i679[26]
  request.r(i679[27], i679[28], 0, i678, 'skybox')
  i678.fogMode = i679[29]
  var i681 = i679[30]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i681[i + 0]) );
  }
  i678.lightmaps = i680
  i678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i679[31], i678.lightProbes)
  i678.lightmapsMode = i679[32]
  i678.mixedBakeMode = i679[33]
  i678.environmentLightingMode = i679[34]
  i678.ambientProbe = new pc.SphericalHarmonicsL2(i679[35])
  i678.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i679[36])
  i678.useReferenceAmbientProbe = !!i679[37]
  request.r(i679[38], i679[39], 0, i678, 'customReflection')
  request.r(i679[40], i679[41], 0, i678, 'defaultReflection')
  i678.defaultReflectionMode = i679[42]
  i678.defaultReflectionResolution = i679[43]
  i678.sunLightObjectId = i679[44]
  i678.pixelLightCount = i679[45]
  i678.defaultReflectionHDR = !!i679[46]
  i678.hasLightDataAsset = !!i679[47]
  i678.hasManualGenerate = !!i679[48]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'lightmapColor')
  request.r(i685[2], i685[3], 0, i684, 'lightmapDirection')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i686 = root || new UnityEngine.LightProbes()
  var i687 = data
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i697[i + 0]));
  }
  i694.ShaderCompilationErrors = i696
  i694.name = i695[1]
  i694.guid = i695[2]
  var i699 = i695[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.shaderDefinedKeywords = i698
  var i701 = i695[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i701[i + 0]) );
  }
  i694.passes = i700
  var i703 = i695[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i703[i + 0]) );
  }
  i694.usePasses = i702
  var i705 = i695[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i705[i + 0]) );
  }
  i694.defaultParameterValues = i704
  request.r(i695[7], i695[8], 0, i694, 'unityFallbackShader')
  i694.readDepth = !!i695[9]
  i694.isCreatedByShaderGraph = !!i695[10]
  i694.compiled = !!i695[11]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i709 = data
  i708.shaderName = i709[0]
  i708.errorMessage = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i714 = root || new pc.UnityShaderPass()
  var i715 = data
  i714.id = i715[0]
  i714.subShaderIndex = i715[1]
  i714.name = i715[2]
  i714.passType = i715[3]
  i714.grabPassTextureName = i715[4]
  i714.usePass = !!i715[5]
  i714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[6], i714.zTest)
  i714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[7], i714.zWrite)
  i714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[8], i714.culling)
  i714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i715[9], i714.blending)
  i714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i715[10], i714.alphaBlending)
  i714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[11], i714.colorWriteMask)
  i714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[12], i714.offsetUnits)
  i714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[13], i714.offsetFactor)
  i714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[14], i714.stencilRef)
  i714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[15], i714.stencilReadMask)
  i714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[16], i714.stencilWriteMask)
  i714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[17], i714.stencilOp)
  i714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[18], i714.stencilOpFront)
  i714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[19], i714.stencilOpBack)
  var i717 = i715[20]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i717[i + 0]) );
  }
  i714.tags = i716
  var i719 = i715[21]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.passDefinedKeywords = i718
  var i721 = i715[22]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i721[i + 0]) );
  }
  i714.passDefinedKeywordGroups = i720
  var i723 = i715[23]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i714.variants = i722
  var i725 = i715[24]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i725[i + 0]) );
  }
  i714.excludedVariants = i724
  i714.hasDepthReader = !!i715[25]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i727 = data
  i726.val = i727[0]
  i726.name = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i729 = data
  i728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.src)
  i728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.dst)
  i728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.op)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i731 = data
  i730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[0], i730.pass)
  i730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[1], i730.fail)
  i730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[2], i730.zFail)
  i730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[3], i730.comp)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.keywords = i740
  i738.hasDiscard = !!i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i745 = data
  i744.passId = i745[0]
  i744.subShaderIndex = i745[1]
  var i747 = i745[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.vertexProgram = i745[3]
  i744.fragmentProgram = i745[4]
  i744.exportedForWebGl2 = !!i745[5]
  i744.readDepth = !!i745[6]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'shader')
  i750.pass = i751[2]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i755 = data
  i754.name = i755[0]
  i754.type = i755[1]
  i754.value = new pc.Vec4( i755[2], i755[3], i755[4], i755[5] )
  i754.textureValue = i755[6]
  i754.shaderPropertyFlag = i755[7]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i757 = data
  i756.name = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'texture')
  i756.aabb = i757[3]
  i756.vertices = i757[4]
  i756.triangles = i757[5]
  i756.textureRect = UnityEngine.Rect.MinMaxRect(i757[6], i757[7], i757[8], i757[9])
  i756.packedRect = UnityEngine.Rect.MinMaxRect(i757[10], i757[11], i757[12], i757[13])
  i756.border = new pc.Vec4( i757[14], i757[15], i757[16], i757[17] )
  i756.transparency = i757[18]
  i756.bounds = i757[19]
  i756.pixelsPerUnit = i757[20]
  i756.textureWidth = i757[21]
  i756.textureHeight = i757[22]
  i756.nativeSize = new pc.Vec2( i757[23], i757[24] )
  i756.pivot = new pc.Vec2( i757[25], i757[26] )
  i756.textureRectOffset = new pc.Vec2( i757[27], i757[28] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i759 = data
  i758.name = i759[0]
  i758.ascent = i759[1]
  i758.originalLineHeight = i759[2]
  i758.fontSize = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i761[i + 0]) );
  }
  i758.characterInfo = i760
  request.r(i759[5], i759[6], 0, i758, 'texture')
  i758.originalFontSize = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i765 = data
  i764.index = i765[0]
  i764.advance = i765[1]
  i764.bearing = i765[2]
  i764.glyphWidth = i765[3]
  i764.glyphHeight = i765[4]
  i764.minX = i765[5]
  i764.maxX = i765[6]
  i764.minY = i765[7]
  i764.maxY = i765[8]
  i764.uvBottomLeftX = i765[9]
  i764.uvBottomLeftY = i765[10]
  i764.uvBottomRightX = i765[11]
  i764.uvBottomRightY = i765[12]
  i764.uvTopLeftX = i765[13]
  i764.uvTopLeftY = i765[14]
  i764.uvTopRightX = i765[15]
  i764.uvTopRightY = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i767 = data
  i766.name = i767[0]
  i766.bytes64 = i767[1]
  i766.data = i767[2]
  return i766
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i768 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i769 = data
  i768.hashCode = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'material')
  i768.materialHashCode = i769[3]
  request.r(i769[4], i769[5], 0, i768, 'atlas')
  i768.normalStyle = i769[6]
  i768.normalSpacingOffset = i769[7]
  i768.boldStyle = i769[8]
  i768.boldSpacing = i769[9]
  i768.italicStyle = i769[10]
  i768.tabSize = i769[11]
  i768.m_Version = i769[12]
  i768.m_SourceFontFileGUID = i769[13]
  request.r(i769[14], i769[15], 0, i768, 'm_SourceFontFile_EditorRef')
  request.r(i769[16], i769[17], 0, i768, 'm_SourceFontFile')
  i768.m_AtlasPopulationMode = i769[18]
  i768.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i769[19], i768.m_FaceInfo)
  var i771 = i769[20]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('UnityEngine.TextCore.Glyph', i771[i + 0]));
  }
  i768.m_GlyphTable = i770
  var i773 = i769[21]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('TMPro.TMP_Character', i773[i + 0]));
  }
  i768.m_CharacterTable = i772
  var i775 = i769[22]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i768.m_AtlasTextures = i774
  i768.m_AtlasTextureIndex = i769[23]
  i768.m_IsMultiAtlasTexturesEnabled = !!i769[24]
  i768.m_ClearDynamicDataOnBuild = !!i769[25]
  var i777 = i769[26]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('UnityEngine.TextCore.GlyphRect', i777[i + 0]));
  }
  i768.m_UsedGlyphRects = i776
  var i779 = i769[27]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.GlyphRect', i779[i + 0]));
  }
  i768.m_FreeGlyphRects = i778
  i768.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i769[28], i768.m_fontInfo)
  i768.m_AtlasWidth = i769[29]
  i768.m_AtlasHeight = i769[30]
  i768.m_AtlasPadding = i769[31]
  i768.m_AtlasRenderMode = i769[32]
  var i781 = i769[33]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('TMPro.TMP_Glyph', i781[i + 0]));
  }
  i768.m_glyphInfoList = i780
  i768.m_KerningTable = request.d('TMPro.KerningTable', i769[34], i768.m_KerningTable)
  i768.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i769[35], i768.m_FontFeatureTable)
  var i783 = i769[36]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i768.fallbackFontAssets = i782
  var i785 = i769[37]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i768.m_FallbackFontAssetTable = i784
  i768.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i769[38], i768.m_CreationSettings)
  var i787 = i769[39]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('TMPro.TMP_FontWeightPair', i787[i + 0]) );
  }
  i768.m_FontWeightTable = i786
  var i789 = i769[40]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('TMPro.TMP_FontWeightPair', i789[i + 0]) );
  }
  i768.fontWeights = i788
  return i768
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i791 = data
  i790.m_FaceIndex = i791[0]
  i790.m_FamilyName = i791[1]
  i790.m_StyleName = i791[2]
  i790.m_PointSize = i791[3]
  i790.m_Scale = i791[4]
  i790.m_UnitsPerEM = i791[5]
  i790.m_LineHeight = i791[6]
  i790.m_AscentLine = i791[7]
  i790.m_CapLine = i791[8]
  i790.m_MeanLine = i791[9]
  i790.m_Baseline = i791[10]
  i790.m_DescentLine = i791[11]
  i790.m_SuperscriptOffset = i791[12]
  i790.m_SuperscriptSize = i791[13]
  i790.m_SubscriptOffset = i791[14]
  i790.m_SubscriptSize = i791[15]
  i790.m_UnderlineOffset = i791[16]
  i790.m_UnderlineThickness = i791[17]
  i790.m_StrikethroughOffset = i791[18]
  i790.m_StrikethroughThickness = i791[19]
  i790.m_TabWidth = i791[20]
  return i790
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i795 = data
  i794.m_Index = i795[0]
  i794.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i795[1], i794.m_Metrics)
  i794.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i795[2], i794.m_GlyphRect)
  i794.m_Scale = i795[3]
  i794.m_AtlasIndex = i795[4]
  i794.m_ClassDefinitionType = i795[5]
  return i794
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i797 = data
  i796.m_Width = i797[0]
  i796.m_Height = i797[1]
  i796.m_HorizontalBearingX = i797[2]
  i796.m_HorizontalBearingY = i797[3]
  i796.m_HorizontalAdvance = i797[4]
  return i796
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i799 = data
  i798.m_X = i799[0]
  i798.m_Y = i799[1]
  i798.m_Width = i799[2]
  i798.m_Height = i799[3]
  return i798
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_Character' )
  var i803 = data
  i802.m_ElementType = i803[0]
  i802.m_Unicode = i803[1]
  i802.m_GlyphIndex = i803[2]
  i802.m_Scale = i803[3]
  return i802
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i809 = data
  i808.Name = i809[0]
  i808.PointSize = i809[1]
  i808.Scale = i809[2]
  i808.CharacterCount = i809[3]
  i808.LineHeight = i809[4]
  i808.Baseline = i809[5]
  i808.Ascender = i809[6]
  i808.CapHeight = i809[7]
  i808.Descender = i809[8]
  i808.CenterLine = i809[9]
  i808.SuperscriptOffset = i809[10]
  i808.SubscriptOffset = i809[11]
  i808.SubSize = i809[12]
  i808.Underline = i809[13]
  i808.UnderlineThickness = i809[14]
  i808.strikethrough = i809[15]
  i808.strikethroughThickness = i809[16]
  i808.TabWidth = i809[17]
  i808.Padding = i809[18]
  i808.AtlasWidth = i809[19]
  i808.AtlasHeight = i809[20]
  return i808
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_Glyph' )
  var i813 = data
  i812.id = i813[0]
  i812.x = i813[1]
  i812.y = i813[2]
  i812.width = i813[3]
  i812.height = i813[4]
  i812.xOffset = i813[5]
  i812.yOffset = i813[6]
  i812.xAdvance = i813[7]
  i812.scale = i813[8]
  return i812
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.KerningTable' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('TMPro.KerningPair', i817[i + 0]));
  }
  i814.kerningPairs = i816
  return i814
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.KerningPair' )
  var i821 = data
  i820.xOffset = i821[0]
  i820.m_FirstGlyph = i821[1]
  i820.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i821[2], i820.m_FirstGlyphAdjustments)
  i820.m_SecondGlyph = i821[3]
  i820.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i821[4], i820.m_SecondGlyphAdjustments)
  i820.m_IgnoreSpacingAdjustments = !!i821[5]
  return i820
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i825[i + 0]));
  }
  i822.m_GlyphPairAdjustmentRecords = i824
  return i822
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i829 = data
  i828.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i829[0], i828.m_FirstAdjustmentRecord)
  i828.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i829[1], i828.m_SecondAdjustmentRecord)
  i828.m_FeatureLookupFlags = i829[2]
  return i828
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i831 = data
  i830.m_GlyphIndex = i831[0]
  i830.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i831[1], i830.m_GlyphValueRecord)
  return i830
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i833 = data
  i832.m_XPlacement = i833[0]
  i832.m_YPlacement = i833[1]
  i832.m_XAdvance = i833[2]
  i832.m_YAdvance = i833[3]
  return i832
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i837 = data
  i836.sourceFontFileName = i837[0]
  i836.sourceFontFileGUID = i837[1]
  i836.pointSizeSamplingMode = i837[2]
  i836.pointSize = i837[3]
  i836.padding = i837[4]
  i836.packingMode = i837[5]
  i836.atlasWidth = i837[6]
  i836.atlasHeight = i837[7]
  i836.characterSetSelectionMode = i837[8]
  i836.characterSequence = i837[9]
  i836.referencedFontAssetGUID = i837[10]
  i836.referencedTextAssetGUID = i837[11]
  i836.fontStyle = i837[12]
  i836.fontStyleModifier = i837[13]
  i836.renderMode = i837[14]
  i836.includeFontFeatures = !!i837[15]
  return i836
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'regularTypeface')
  request.r(i841[2], i841[3], 0, i840, 'italicTypeface')
  return i840
}

Deserializers["HandSettingsSO"] = function (request, data, root) {
  var i842 = root || request.c( 'HandSettingsSO' )
  var i843 = data
  i842.handHeight = i843[0]
  i842.handWidth = i843[1]
  i842.maxCardAngle = i843[2]
  i842.yPerCard = i843[3]
  i842.zDistance = i843[4]
  i842.handY = i843[5]
  i842.handZ = i843[6]
  return i842
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i845 = data
  i844.useSafeMode = !!i845[0]
  i844.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i845[1], i844.safeModeOptions)
  i844.timeScale = i845[2]
  i844.unscaledTimeScale = i845[3]
  i844.useSmoothDeltaTime = !!i845[4]
  i844.maxSmoothUnscaledTime = i845[5]
  i844.rewindCallbackMode = i845[6]
  i844.showUnityEditorReport = !!i845[7]
  i844.logBehaviour = i845[8]
  i844.drawGizmos = !!i845[9]
  i844.defaultRecyclable = !!i845[10]
  i844.defaultAutoPlay = i845[11]
  i844.defaultUpdateType = i845[12]
  i844.defaultTimeScaleIndependent = !!i845[13]
  i844.defaultEaseType = i845[14]
  i844.defaultEaseOvershootOrAmplitude = i845[15]
  i844.defaultEasePeriod = i845[16]
  i844.defaultAutoKill = !!i845[17]
  i844.defaultLoopType = i845[18]
  i844.debugMode = !!i845[19]
  i844.debugStoreTargetId = !!i845[20]
  i844.showPreviewPanel = !!i845[21]
  i844.storeSettingsLocation = i845[22]
  i844.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i845[23], i844.modules)
  i844.createASMDEF = !!i845[24]
  i844.showPlayingTweens = !!i845[25]
  i844.showPausedTweens = !!i845[26]
  return i844
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i846 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i847 = data
  i846.logBehaviour = i847[0]
  i846.nestedTweenFailureBehaviour = i847[1]
  return i846
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i849 = data
  i848.showPanel = !!i849[0]
  i848.audioEnabled = !!i849[1]
  i848.physicsEnabled = !!i849[2]
  i848.physics2DEnabled = !!i849[3]
  i848.spriteEnabled = !!i849[4]
  i848.uiEnabled = !!i849[5]
  i848.textMeshProEnabled = !!i849[6]
  i848.tk2DEnabled = !!i849[7]
  i848.deAudioEnabled = !!i849[8]
  i848.deUnityExtendedEnabled = !!i849[9]
  i848.epoOutlineEnabled = !!i849[10]
  return i848
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_Settings' )
  var i851 = data
  i850.m_enableWordWrapping = !!i851[0]
  i850.m_enableKerning = !!i851[1]
  i850.m_enableExtraPadding = !!i851[2]
  i850.m_enableTintAllSprites = !!i851[3]
  i850.m_enableParseEscapeCharacters = !!i851[4]
  i850.m_EnableRaycastTarget = !!i851[5]
  i850.m_GetFontFeaturesAtRuntime = !!i851[6]
  i850.m_missingGlyphCharacter = i851[7]
  i850.m_warningsDisabled = !!i851[8]
  request.r(i851[9], i851[10], 0, i850, 'm_defaultFontAsset')
  i850.m_defaultFontAssetPath = i851[11]
  i850.m_defaultFontSize = i851[12]
  i850.m_defaultAutoSizeMinRatio = i851[13]
  i850.m_defaultAutoSizeMaxRatio = i851[14]
  i850.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i851[15], i851[16] )
  i850.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i851[17], i851[18] )
  i850.m_autoSizeTextContainer = !!i851[19]
  i850.m_IsTextObjectScaleStatic = !!i851[20]
  var i853 = i851[21]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i850.m_fallbackFontAssets = i852
  i850.m_matchMaterialPreset = !!i851[22]
  request.r(i851[23], i851[24], 0, i850, 'm_defaultSpriteAsset')
  i850.m_defaultSpriteAssetPath = i851[25]
  i850.m_enableEmojiSupport = !!i851[26]
  i850.m_MissingCharacterSpriteUnicode = i851[27]
  i850.m_defaultColorGradientPresetsPath = i851[28]
  request.r(i851[29], i851[30], 0, i850, 'm_defaultStyleSheet')
  i850.m_StyleSheetsResourcePath = i851[31]
  request.r(i851[32], i851[33], 0, i850, 'm_leadingCharacters')
  request.r(i851[34], i851[35], 0, i850, 'm_followingCharacters')
  i850.m_UseModernHangulLineBreakingRules = !!i851[36]
  return i850
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i855 = data
  i854.hashCode = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'material')
  i854.materialHashCode = i855[3]
  request.r(i855[4], i855[5], 0, i854, 'spriteSheet')
  var i857 = i855[6]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.TMP_Sprite', i857[i + 0]));
  }
  i854.spriteInfoList = i856
  var i859 = i855[7]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i854.fallbackSpriteAssets = i858
  i854.m_Version = i855[8]
  i854.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i855[9], i854.m_FaceInfo)
  var i861 = i855[10]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('TMPro.TMP_SpriteCharacter', i861[i + 0]));
  }
  i854.m_SpriteCharacterTable = i860
  var i863 = i855[11]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.TMP_SpriteGlyph', i863[i + 0]));
  }
  i854.m_SpriteGlyphTable = i862
  return i854
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Sprite' )
  var i867 = data
  i866.name = i867[0]
  i866.hashCode = i867[1]
  i866.unicode = i867[2]
  i866.pivot = new pc.Vec2( i867[3], i867[4] )
  request.r(i867[5], i867[6], 0, i866, 'sprite')
  i866.id = i867[7]
  i866.x = i867[8]
  i866.y = i867[9]
  i866.width = i867[10]
  i866.height = i867[11]
  i866.xOffset = i867[12]
  i866.yOffset = i867[13]
  i866.xAdvance = i867[14]
  i866.scale = i867[15]
  return i866
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i873 = data
  i872.m_Name = i873[0]
  i872.m_HashCode = i873[1]
  i872.m_ElementType = i873[2]
  i872.m_Unicode = i873[3]
  i872.m_GlyphIndex = i873[4]
  i872.m_Scale = i873[5]
  return i872
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'sprite')
  i876.m_Index = i877[2]
  i876.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i877[3], i876.m_Metrics)
  i876.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i877[4], i876.m_GlyphRect)
  i876.m_Scale = i877[5]
  i876.m_AtlasIndex = i877[6]
  i876.m_ClassDefinitionType = i877[7]
  return i876
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_Style', i881[i + 0]));
  }
  i878.m_StyleList = i880
  return i878
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_Style' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_HashCode = i885[1]
  i884.m_OpeningDefinition = i885[2]
  i884.m_ClosingDefinition = i885[3]
  i884.m_OpeningTagArray = i885[4]
  i884.m_ClosingTagArray = i885[5]
  i884.m_OpeningTagUnicodeArray = i885[6]
  i884.m_ClosingTagUnicodeArray = i885[7]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i889[i + 0]) );
  }
  i886.files = i888
  i886.componentToPrefabIds = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i893 = data
  i892.path = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'unityObject')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i897[i + 0]) );
  }
  i894.scriptsExecutionOrder = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i899[i + 0]) );
  }
  i894.sortingLayers = i898
  var i901 = i895[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i901[i + 0]) );
  }
  i894.cullingLayers = i900
  i894.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i895[3], i894.timeSettings)
  i894.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i895[4], i894.physicsSettings)
  i894.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i895[5], i894.physics2DSettings)
  i894.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[6], i894.qualitySettings)
  i894.enableRealtimeShadows = !!i895[7]
  i894.enableAutoInstancing = !!i895[8]
  i894.enableDynamicBatching = !!i895[9]
  i894.lightmapEncodingQuality = i895[10]
  i894.desiredColorSpace = i895[11]
  var i903 = i895[12]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i894.allTags = i902
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i907 = data
  i906.name = i907[0]
  i906.value = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  i910.value = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i915 = data
  i914.id = i915[0]
  i914.name = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i917 = data
  i916.fixedDeltaTime = i917[0]
  i916.maximumDeltaTime = i917[1]
  i916.timeScale = i917[2]
  i916.maximumParticleTimestep = i917[3]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i919 = data
  i918.gravity = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.defaultSolverIterations = i919[3]
  i918.bounceThreshold = i919[4]
  i918.autoSyncTransforms = !!i919[5]
  i918.autoSimulation = !!i919[6]
  var i921 = i919[7]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i921[i + 0]) );
  }
  i918.collisionMatrix = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.layerId = i925[1]
  i924.otherLayerId = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'material')
  i926.gravity = new pc.Vec2( i927[2], i927[3] )
  i926.positionIterations = i927[4]
  i926.velocityIterations = i927[5]
  i926.velocityThreshold = i927[6]
  i926.maxLinearCorrection = i927[7]
  i926.maxAngularCorrection = i927[8]
  i926.maxTranslationSpeed = i927[9]
  i926.maxRotationSpeed = i927[10]
  i926.baumgarteScale = i927[11]
  i926.baumgarteTOIScale = i927[12]
  i926.timeToSleep = i927[13]
  i926.linearSleepTolerance = i927[14]
  i926.angularSleepTolerance = i927[15]
  i926.defaultContactOffset = i927[16]
  i926.autoSimulation = !!i927[17]
  i926.queriesHitTriggers = !!i927[18]
  i926.queriesStartInColliders = !!i927[19]
  i926.callbacksOnDisable = !!i927[20]
  i926.reuseCollisionCallbacks = !!i927[21]
  i926.autoSyncTransforms = !!i927[22]
  var i929 = i927[23]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i929[i + 0]) );
  }
  i926.collisionMatrix = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i933 = data
  i932.enabled = !!i933[0]
  i932.layerId = i933[1]
  i932.otherLayerId = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i937[i + 0]) );
  }
  i934.qualityLevels = i936
  var i939 = i935[1]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i934.names = i938
  i934.shadows = i935[2]
  i934.anisotropicFiltering = i935[3]
  i934.antiAliasing = i935[4]
  i934.lodBias = i935[5]
  i934.shadowCascades = i935[6]
  i934.shadowDistance = i935[7]
  i934.shadowmaskMode = i935[8]
  i934.shadowProjection = i935[9]
  i934.shadowResolution = i935[10]
  i934.softParticles = !!i935[11]
  i934.softVegetation = !!i935[12]
  i934.activeColorSpace = i935[13]
  i934.desiredColorSpace = i935[14]
  i934.masterTextureLimit = i935[15]
  i934.maxQueuedFrames = i935[16]
  i934.particleRaycastBudget = i935[17]
  i934.pixelLightCount = i935[18]
  i934.realtimeReflectionProbes = !!i935[19]
  i934.shadowCascade2Split = i935[20]
  i934.shadowCascade4Split = new pc.Vec3( i935[21], i935[22], i935[23] )
  i934.streamingMipmapsActive = !!i935[24]
  i934.vSyncCount = i935[25]
  i934.asyncUploadBufferSize = i935[26]
  i934.asyncUploadTimeSlice = i935[27]
  i934.billboardsFaceCameraPosition = !!i935[28]
  i934.shadowNearPlaneOffset = i935[29]
  i934.streamingMipmapsMemoryBudget = i935[30]
  i934.maximumLODLevel = i935[31]
  i934.streamingMipmapsAddAllCameras = !!i935[32]
  i934.streamingMipmapsMaxLevelReduction = i935[33]
  i934.streamingMipmapsRenderersPerFrame = i935[34]
  i934.resolutionScalingFixedDPIFactor = i935[35]
  i934.streamingMipmapsMaxFileIORequests = i935[36]
  i934.currentQualityLevel = i935[37]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i945 = data
  i944.weight = i945[0]
  i944.vertices = i945[1]
  i944.normals = i945[2]
  i944.tangents = i945[3]
  return i944
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i947 = data
  i946.xPlacement = i947[0]
  i946.yPlacement = i947[1]
  i946.xAdvance = i947[2]
  i946.yAdvance = i947[3]
  return i946
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[18],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[18],"80":[6],"81":[82],"83":[82],"20":[12],"26":[36],"84":[85],"86":[8],"87":[85],"88":[12],"89":[12],"22":[20],"24":[23,12],"90":[12],"21":[20],"91":[12],"92":[12],"93":[12],"94":[12],"95":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[23,12],"101":[12],"102":[12],"103":[12],"104":[12],"105":[23,12],"106":[12],"107":[38],"108":[38],"39":[38],"109":[38],"110":[18],"111":[18],"112":[12],"7":[6,12],"27":[12,23],"113":[12],"114":[23,12],"115":[6],"116":[23,12],"117":[12],"118":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","GameActionButton","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.SpriteRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","Card","UnityEngine.GameObject","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HandController","TMPro.TextMeshProUGUI","GameManager","UnityEngine.Light","CardLayer","CardPool","DeckController","ThrowController","DragController","OpponentController","HandSlotArc","HandSettingsSO","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.39f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "02/13/2025 12:27:01";

Deserializers.lunaDaysRunning = "11.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Gin-PlayableTest";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1735";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4247";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, mecanim-wasm";

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

Deserializers.buildID = "71158532-b1a8-4fb5-b2da-4ed99339bc1c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

