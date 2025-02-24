var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSpring' )
  var i473 = data
  i472.spring = i473[0]
  i472.damper = i473[1]
  i472.targetPosition = i473[2]
  return i472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor' )
  var i475 = data
  i474.m_TargetVelocity = i475[0]
  i474.m_Force = i475[1]
  i474.m_FreeSpin = i475[2]
  return i474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointLimits' )
  var i477 = data
  i476.m_Min = i477[0]
  i476.m_Max = i477[1]
  i476.m_Bounciness = i477[2]
  i476.m_BounceMinVelocity = i477[3]
  i476.m_ContactDistance = i477[4]
  i476.minBounce = i477[5]
  i476.maxBounce = i477[6]
  return i476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointDrive' )
  var i479 = data
  i478.m_PositionSpring = i479[0]
  i478.m_PositionDamper = i479[1]
  i478.m_MaximumForce = i479[2]
  i478.m_UseAcceleration = i479[3]
  return i478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i481 = data
  i480.m_Spring = i481[0]
  i480.m_Damper = i481[1]
  return i480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i483 = data
  i482.m_Limit = i483[0]
  i482.m_Bounciness = i483[1]
  i482.m_ContactDistance = i483[2]
  return i482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i485 = data
  i484.m_ExtremumSlip = i485[0]
  i484.m_ExtremumValue = i485[1]
  i484.m_AsymptoteSlip = i485[2]
  i484.m_AsymptoteValue = i485[3]
  i484.m_Stiffness = i485[4]
  return i484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i487 = data
  i486.m_LowerAngle = i487[0]
  i486.m_UpperAngle = i487[1]
  return i486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i489 = data
  i488.m_MotorSpeed = i489[0]
  i488.m_MaximumMotorTorque = i489[1]
  return i488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i491 = data
  i490.m_DampingRatio = i491[0]
  i490.m_Frequency = i491[1]
  i490.m_Angle = i491[2]
  return i490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i493 = data
  i492.m_LowerTranslation = i493[0]
  i492.m_UpperTranslation = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i494 = root || new pc.UnityMaterial()
  var i495 = data
  i494.name = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'shader')
  i494.renderQueue = i495[3]
  i494.enableInstancing = !!i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i497[i + 0]) );
  }
  i494.floatParameters = i496
  var i499 = i495[6]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i499[i + 0]) );
  }
  i494.colorParameters = i498
  var i501 = i495[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i501[i + 0]) );
  }
  i494.vectorParameters = i500
  var i503 = i495[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i503[i + 0]) );
  }
  i494.textureParameters = i502
  var i505 = i495[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i505[i + 0]) );
  }
  i494.materialFlags = i504
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Color(i513[1], i513[2], i513[3], i513[4])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Vec4( i517[1], i517[2], i517[3], i517[4] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'value')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i525 = data
  i524.name = i525[0]
  i524.enabled = !!i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i527 = data
  i526.name = i527[0]
  i526.width = i527[1]
  i526.height = i527[2]
  i526.mipmapCount = i527[3]
  i526.anisoLevel = i527[4]
  i526.filterMode = i527[5]
  i526.hdr = !!i527[6]
  i526.format = i527[7]
  i526.wrapMode = i527[8]
  i526.alphaIsTransparency = !!i527[9]
  i526.alphaSource = i527[10]
  i526.graphicsFormat = i527[11]
  i526.sRGBTexture = !!i527[12]
  i526.desiredColorSpace = i527[13]
  i526.wrapU = i527[14]
  i526.wrapV = i527[15]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i529 = data
  i528.position = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.scale = new pc.Vec3( i529[3], i529[4], i529[5] )
  i528.rotation = new pc.Quat(i529[6], i529[7], i529[8], i529[9])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i531 = data
  i530.center = new pc.Vec3( i531[0], i531[1], i531[2] )
  i530.size = new pc.Vec3( i531[3], i531[4], i531[5] )
  i530.enabled = !!i531[6]
  i530.isTrigger = !!i531[7]
  request.r(i531[8], i531[9], 0, i530, 'material')
  return i530
}

Deserializers["GameActionButton"] = function (request, data, root) {
  var i532 = root || request.c( 'GameActionButton' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'holder')
  i532.gameActionButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i533[2] )
  i532.moveUpY = i533[3]
  i532.moveDownY = i533[4]
  request.r(i533[5], i533[6], 0, i532, 'textureGin')
  request.r(i533[7], i533[8], 0, i532, 'texturePass')
  request.r(i533[9], i533[10], 0, i532, 'textureKnock')
  request.r(i533[11], i533[12], 0, i532, 'buttonMeshRenderer')
  request.r(i533[13], i533[14], 0, i532, 'buttonTransform')
  request.r(i533[15], i533[16], 0, i532, 'knockValueText')
  i532.rayDistance = i533[17]
  request.r(i533[18], i533[19], 0, i532, 'shadowSpriteRenderer')
  request.r(i533[20], i533[21], 0, i532, 'shadowTransform')
  request.r(i533[22], i533[23], 0, i532, 'frameSpriteRenderer')
  request.r(i533[24], i533[25], 0, i532, 'effectSpriteRenderer')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'sharedMesh')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'additionalVertexStreams')
  i536.enabled = !!i537[2]
  request.r(i537[3], i537[4], 0, i536, 'sharedMaterial')
  var i539 = i537[5]
  var i538 = []
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 2, i538, '')
  }
  i536.sharedMaterials = i538
  i536.receiveShadows = !!i537[6]
  i536.shadowCastingMode = i537[7]
  i536.sortingLayerID = i537[8]
  i536.sortingOrder = i537[9]
  i536.lightmapIndex = i537[10]
  i536.lightmapSceneIndex = i537[11]
  i536.lightmapScaleOffset = new pc.Vec4( i537[12], i537[13], i537[14], i537[15] )
  i536.lightProbeUsage = i537[16]
  i536.reflectionProbeUsage = i537[17]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i543 = data
  i542.name = i543[0]
  i542.tagId = i543[1]
  i542.enabled = !!i543[2]
  i542.isStatic = !!i543[3]
  i542.layer = i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i545 = data
  i544.pivot = new pc.Vec2( i545[0], i545[1] )
  i544.anchorMin = new pc.Vec2( i545[2], i545[3] )
  i544.anchorMax = new pc.Vec2( i545[4], i545[5] )
  i544.sizeDelta = new pc.Vec2( i545[6], i545[7] )
  i544.anchoredPosition3D = new pc.Vec3( i545[8], i545[9], i545[10] )
  i544.rotation = new pc.Quat(i545[11], i545[12], i545[13], i545[14])
  i544.scale = new pc.Vec3( i545[15], i545[16], i545[17] )
  return i544
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i546 = root || request.c( 'TMPro.TextMeshPro' )
  var i547 = data
  i546._SortingLayer = i547[0]
  i546._SortingLayerID = i547[1]
  i546._SortingOrder = i547[2]
  i546.m_hasFontAssetChanged = !!i547[3]
  request.r(i547[4], i547[5], 0, i546, 'm_renderer')
  i546.m_maskType = i547[6]
  i546.m_text = i547[7]
  i546.m_isRightToLeft = !!i547[8]
  request.r(i547[9], i547[10], 0, i546, 'm_fontAsset')
  request.r(i547[11], i547[12], 0, i546, 'm_sharedMaterial')
  var i549 = i547[13]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.m_fontSharedMaterials = i548
  request.r(i547[14], i547[15], 0, i546, 'm_fontMaterial')
  var i551 = i547[16]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i546.m_fontMaterials = i550
  i546.m_fontColor32 = UnityEngine.Color32.ConstructColor(i547[17], i547[18], i547[19], i547[20])
  i546.m_fontColor = new pc.Color(i547[21], i547[22], i547[23], i547[24])
  i546.m_enableVertexGradient = !!i547[25]
  i546.m_colorMode = i547[26]
  i546.m_fontColorGradient = request.d('TMPro.VertexGradient', i547[27], i546.m_fontColorGradient)
  request.r(i547[28], i547[29], 0, i546, 'm_fontColorGradientPreset')
  request.r(i547[30], i547[31], 0, i546, 'm_spriteAsset')
  i546.m_tintAllSprites = !!i547[32]
  request.r(i547[33], i547[34], 0, i546, 'm_StyleSheet')
  i546.m_TextStyleHashCode = i547[35]
  i546.m_overrideHtmlColors = !!i547[36]
  i546.m_faceColor = UnityEngine.Color32.ConstructColor(i547[37], i547[38], i547[39], i547[40])
  i546.m_fontSize = i547[41]
  i546.m_fontSizeBase = i547[42]
  i546.m_fontWeight = i547[43]
  i546.m_enableAutoSizing = !!i547[44]
  i546.m_fontSizeMin = i547[45]
  i546.m_fontSizeMax = i547[46]
  i546.m_fontStyle = i547[47]
  i546.m_HorizontalAlignment = i547[48]
  i546.m_VerticalAlignment = i547[49]
  i546.m_textAlignment = i547[50]
  i546.m_characterSpacing = i547[51]
  i546.m_wordSpacing = i547[52]
  i546.m_lineSpacing = i547[53]
  i546.m_lineSpacingMax = i547[54]
  i546.m_paragraphSpacing = i547[55]
  i546.m_charWidthMaxAdj = i547[56]
  i546.m_enableWordWrapping = !!i547[57]
  i546.m_wordWrappingRatios = i547[58]
  i546.m_overflowMode = i547[59]
  request.r(i547[60], i547[61], 0, i546, 'm_linkedTextComponent')
  request.r(i547[62], i547[63], 0, i546, 'parentLinkedComponent')
  i546.m_enableKerning = !!i547[64]
  i546.m_enableExtraPadding = !!i547[65]
  i546.checkPaddingRequired = !!i547[66]
  i546.m_isRichText = !!i547[67]
  i546.m_parseCtrlCharacters = !!i547[68]
  i546.m_isOrthographic = !!i547[69]
  i546.m_isCullingEnabled = !!i547[70]
  i546.m_horizontalMapping = i547[71]
  i546.m_verticalMapping = i547[72]
  i546.m_uvLineOffset = i547[73]
  i546.m_geometrySortingOrder = i547[74]
  i546.m_IsTextObjectScaleStatic = !!i547[75]
  i546.m_VertexBufferAutoSizeReduction = !!i547[76]
  i546.m_useMaxVisibleDescender = !!i547[77]
  i546.m_pageToDisplay = i547[78]
  i546.m_margin = new pc.Vec4( i547[79], i547[80], i547[81], i547[82] )
  i546.m_isUsingLegacyAnimationComponent = !!i547[83]
  i546.m_isVolumetricText = !!i547[84]
  request.r(i547[85], i547[86], 0, i546, 'm_Material')
  i546.m_Maskable = !!i547[87]
  i546.m_Color = new pc.Color(i547[88], i547[89], i547[90], i547[91])
  i546.m_RaycastTarget = !!i547[92]
  i546.m_RaycastPadding = new pc.Vec4( i547[93], i547[94], i547[95], i547[96] )
  return i546
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i552 = root || request.c( 'TMPro.VertexGradient' )
  var i553 = data
  i552.topLeft = new pc.Color(i553[0], i553[1], i553[2], i553[3])
  i552.topRight = new pc.Color(i553[4], i553[5], i553[6], i553[7])
  i552.bottomLeft = new pc.Color(i553[8], i553[9], i553[10], i553[11])
  i552.bottomRight = new pc.Color(i553[12], i553[13], i553[14], i553[15])
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i555 = data
  i554.enabled = !!i555[0]
  request.r(i555[1], i555[2], 0, i554, 'sharedMaterial')
  var i557 = i555[3]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i554.sharedMaterials = i556
  i554.receiveShadows = !!i555[4]
  i554.shadowCastingMode = i555[5]
  i554.sortingLayerID = i555[6]
  i554.sortingOrder = i555[7]
  i554.lightmapIndex = i555[8]
  i554.lightmapSceneIndex = i555[9]
  i554.lightmapScaleOffset = new pc.Vec4( i555[10], i555[11], i555[12], i555[13] )
  i554.lightProbeUsage = i555[14]
  i554.reflectionProbeUsage = i555[15]
  i554.color = new pc.Color(i555[16], i555[17], i555[18], i555[19])
  request.r(i555[20], i555[21], 0, i554, 'sprite')
  i554.flipX = !!i555[22]
  i554.flipY = !!i555[23]
  i554.drawMode = i555[24]
  i554.size = new pc.Vec2( i555[25], i555[26] )
  i554.tileMode = i555[27]
  i554.adaptiveModeThreshold = i555[28]
  i554.maskInteraction = i555[29]
  i554.spriteSortPoint = i555[30]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i559 = data
  i558.name = i559[0]
  i558.halfPrecision = !!i559[1]
  i558.useUInt32IndexFormat = !!i559[2]
  i558.vertexCount = i559[3]
  i558.aabb = i559[4]
  var i561 = i559[5]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( !!i561[i + 0] );
  }
  i558.streams = i560
  i558.vertices = i559[6]
  var i563 = i559[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i563[i + 0]) );
  }
  i558.subMeshes = i562
  var i565 = i559[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 16) {
    i564.push( new pc.Mat4().setData(i565[i + 0], i565[i + 1], i565[i + 2], i565[i + 3],  i565[i + 4], i565[i + 5], i565[i + 6], i565[i + 7],  i565[i + 8], i565[i + 9], i565[i + 10], i565[i + 11],  i565[i + 12], i565[i + 13], i565[i + 14], i565[i + 15]) );
  }
  i558.bindposes = i564
  var i567 = i559[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i567[i + 0]) );
  }
  i558.blendShapes = i566
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i573 = data
  i572.triangles = i573[0]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i579 = data
  i578.name = i579[0]
  var i581 = i579[1]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i581[i + 0]) );
  }
  i578.frames = i580
  return i578
}

Deserializers["Card"] = function (request, data, root) {
  var i582 = root || request.c( 'Card' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'frontRenderer')
  request.r(i583[2], i583[3], 0, i582, 'backRenderer')
  request.r(i583[4], i583[5], 0, i582, 'shadowHandRenderer')
  request.r(i583[6], i583[7], 0, i582, 'shadowDeckRenderer')
  request.r(i583[8], i583[9], 0, i582, 'shadowThrowRenderer')
  request.r(i583[10], i583[11], 0, i582, 'shadowMeldingRenderer')
  request.r(i583[12], i583[13], 0, i582, 'shadowOutline')
  request.r(i583[14], i583[15], 0, i582, 'layOffOutline')
  request.r(i583[16], i583[17], 0, i582, 'container')
  var i585 = i583[18]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sprites = i584
  request.r(i583[19], i583[20], 0, i582, 'highlightRenderer')
  var i587 = i583[21]
  var i586 = []
  for(var i = 0; i < i587.length; i += 4) {
    i586.push( new pc.Color(i587[i + 0], i587[i + 1], i587[i + 2], i587[i + 3]) );
  }
  i582.highlightColors = i586
  i582.blockedColor = new pc.Color(i583[22], i583[23], i583[24], i583[25])
  i582.nonBlockedColor = new pc.Color(i583[26], i583[27], i583[28], i583[29])
  request.r(i583[30], i583[31], 0, i582, 'boxCollider')
  var i589 = i583[32]
  var i588 = []
  for(var i = 0; i < i589.length; i += 4) {
    i588.push( new pc.Color(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3]) );
  }
  i582.layOffColors = i588
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i595 = data
  i594.name = i595[0]
  i594.atlasId = i595[1]
  i594.mipmapCount = i595[2]
  i594.hdr = !!i595[3]
  i594.size = i595[4]
  i594.anisoLevel = i595[5]
  i594.filterMode = i595[6]
  var i597 = i595[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 4) {
    i596.push( UnityEngine.Rect.MinMaxRect(i597[i + 0], i597[i + 1], i597[i + 2], i597[i + 3]) );
  }
  i594.rects = i596
  i594.wrapU = i595[8]
  i594.wrapV = i595[9]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i601 = data
  i600.name = i601[0]
  i600.index = i601[1]
  i600.startup = !!i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i603 = data
  i602.enabled = !!i603[0]
  i602.aspect = i603[1]
  i602.orthographic = !!i603[2]
  i602.orthographicSize = i603[3]
  i602.backgroundColor = new pc.Color(i603[4], i603[5], i603[6], i603[7])
  i602.nearClipPlane = i603[8]
  i602.farClipPlane = i603[9]
  i602.fieldOfView = i603[10]
  i602.depth = i603[11]
  i602.clearFlags = i603[12]
  i602.cullingMask = i603[13]
  i602.rect = i603[14]
  request.r(i603[15], i603[16], 0, i602, 'targetTexture')
  i602.usePhysicalProperties = !!i603[17]
  i602.focalLength = i603[18]
  i602.sensorSize = new pc.Vec2( i603[19], i603[20] )
  i602.lensShift = new pc.Vec2( i603[21], i603[22] )
  i602.gateFit = i603[23]
  i602.commandBufferCount = i603[24]
  i602.cameraType = i603[25]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.planeDistance = i605[1]
  i604.referencePixelsPerUnit = i605[2]
  i604.isFallbackOverlay = !!i605[3]
  i604.renderMode = i605[4]
  i604.renderOrder = i605[5]
  i604.sortingLayerName = i605[6]
  i604.sortingOrder = i605[7]
  i604.scaleFactor = i605[8]
  request.r(i605[9], i605[10], 0, i604, 'worldCamera')
  i604.overrideSorting = !!i605[11]
  i604.pixelPerfect = !!i605[12]
  i604.targetDisplay = i605[13]
  i604.overridePixelPerfect = !!i605[14]
  return i604
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i607 = data
  i606.m_UiScaleMode = i607[0]
  i606.m_ReferencePixelsPerUnit = i607[1]
  i606.m_ScaleFactor = i607[2]
  i606.m_ReferenceResolution = new pc.Vec2( i607[3], i607[4] )
  i606.m_ScreenMatchMode = i607[5]
  i606.m_MatchWidthOrHeight = i607[6]
  i606.m_PhysicalUnit = i607[7]
  i606.m_FallbackScreenDPI = i607[8]
  i606.m_DefaultSpriteDPI = i607[9]
  i606.m_DynamicPixelsPerUnit = i607[10]
  i606.m_PresetInfoIsWorld = !!i607[11]
  return i606
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i609 = data
  i608.m_IgnoreReversedGraphics = !!i609[0]
  i608.m_BlockingObjects = i609[1]
  i608.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i609[2] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i611 = data
  i610.cullTransparentMesh = !!i611[0]
  return i610
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Image' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_Sprite')
  i612.m_Type = i613[2]
  i612.m_PreserveAspect = !!i613[3]
  i612.m_FillCenter = !!i613[4]
  i612.m_FillMethod = i613[5]
  i612.m_FillAmount = i613[6]
  i612.m_FillClockwise = !!i613[7]
  i612.m_FillOrigin = i613[8]
  i612.m_UseSpriteMesh = !!i613[9]
  i612.m_PixelsPerUnitMultiplier = i613[10]
  request.r(i613[11], i613[12], 0, i612, 'm_Material')
  i612.m_Maskable = !!i613[13]
  i612.m_Color = new pc.Color(i613[14], i613[15], i613[16], i613[17])
  i612.m_RaycastTarget = !!i613[18]
  i612.m_RaycastPadding = new pc.Vec4( i613[19], i613[20], i613[21], i613[22] )
  return i612
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.Button' )
  var i615 = data
  i614.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i615[0], i614.m_OnClick)
  i614.m_Navigation = request.d('UnityEngine.UI.Navigation', i615[1], i614.m_Navigation)
  i614.m_Transition = i615[2]
  i614.m_Colors = request.d('UnityEngine.UI.ColorBlock', i615[3], i614.m_Colors)
  i614.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i615[4], i614.m_SpriteState)
  i614.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i615[5], i614.m_AnimationTriggers)
  i614.m_Interactable = !!i615[6]
  request.r(i615[7], i615[8], 0, i614, 'm_TargetGraphic')
  return i614
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i617 = data
  i616.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i617[0], i616.m_PersistentCalls)
  return i616
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i619 = data
  var i621 = i619[0]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i621.length; i += 1) {
    i620.add(request.d('UnityEngine.Events.PersistentCall', i621[i + 0]));
  }
  i618.m_Calls = i620
  return i618
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_Target')
  i624.m_TargetAssemblyTypeName = i625[2]
  i624.m_MethodName = i625[3]
  i624.m_Mode = i625[4]
  i624.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i625[5], i624.m_Arguments)
  i624.m_CallState = i625[6]
  return i624
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_ObjectArgument')
  i626.m_ObjectArgumentAssemblyTypeName = i627[2]
  i626.m_IntArgument = i627[3]
  i626.m_FloatArgument = i627[4]
  i626.m_StringArgument = i627[5]
  i626.m_BoolArgument = !!i627[6]
  return i626
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i629 = data
  i628.m_Mode = i629[0]
  i628.m_WrapAround = !!i629[1]
  request.r(i629[2], i629[3], 0, i628, 'm_SelectOnUp')
  request.r(i629[4], i629[5], 0, i628, 'm_SelectOnDown')
  request.r(i629[6], i629[7], 0, i628, 'm_SelectOnLeft')
  request.r(i629[8], i629[9], 0, i628, 'm_SelectOnRight')
  return i628
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i631 = data
  i630.m_NormalColor = new pc.Color(i631[0], i631[1], i631[2], i631[3])
  i630.m_HighlightedColor = new pc.Color(i631[4], i631[5], i631[6], i631[7])
  i630.m_PressedColor = new pc.Color(i631[8], i631[9], i631[10], i631[11])
  i630.m_SelectedColor = new pc.Color(i631[12], i631[13], i631[14], i631[15])
  i630.m_DisabledColor = new pc.Color(i631[16], i631[17], i631[18], i631[19])
  i630.m_ColorMultiplier = i631[20]
  i630.m_FadeDuration = i631[21]
  return i630
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_HighlightedSprite')
  request.r(i633[2], i633[3], 0, i632, 'm_PressedSprite')
  request.r(i633[4], i633[5], 0, i632, 'm_SelectedSprite')
  request.r(i633[6], i633[7], 0, i632, 'm_DisabledSprite')
  return i632
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i635 = data
  i634.m_NormalTrigger = i635[0]
  i634.m_HighlightedTrigger = i635[1]
  i634.m_PressedTrigger = i635[2]
  i634.m_SelectedTrigger = i635[3]
  i634.m_DisabledTrigger = i635[4]
  return i634
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i636 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i637 = data
  i636.m_hasFontAssetChanged = !!i637[0]
  request.r(i637[1], i637[2], 0, i636, 'm_baseMaterial')
  i636.m_maskOffset = new pc.Vec4( i637[3], i637[4], i637[5], i637[6] )
  i636.m_text = i637[7]
  i636.m_isRightToLeft = !!i637[8]
  request.r(i637[9], i637[10], 0, i636, 'm_fontAsset')
  request.r(i637[11], i637[12], 0, i636, 'm_sharedMaterial')
  var i639 = i637[13]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.m_fontSharedMaterials = i638
  request.r(i637[14], i637[15], 0, i636, 'm_fontMaterial')
  var i641 = i637[16]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i636.m_fontMaterials = i640
  i636.m_fontColor32 = UnityEngine.Color32.ConstructColor(i637[17], i637[18], i637[19], i637[20])
  i636.m_fontColor = new pc.Color(i637[21], i637[22], i637[23], i637[24])
  i636.m_enableVertexGradient = !!i637[25]
  i636.m_colorMode = i637[26]
  i636.m_fontColorGradient = request.d('TMPro.VertexGradient', i637[27], i636.m_fontColorGradient)
  request.r(i637[28], i637[29], 0, i636, 'm_fontColorGradientPreset')
  request.r(i637[30], i637[31], 0, i636, 'm_spriteAsset')
  i636.m_tintAllSprites = !!i637[32]
  request.r(i637[33], i637[34], 0, i636, 'm_StyleSheet')
  i636.m_TextStyleHashCode = i637[35]
  i636.m_overrideHtmlColors = !!i637[36]
  i636.m_faceColor = UnityEngine.Color32.ConstructColor(i637[37], i637[38], i637[39], i637[40])
  i636.m_fontSize = i637[41]
  i636.m_fontSizeBase = i637[42]
  i636.m_fontWeight = i637[43]
  i636.m_enableAutoSizing = !!i637[44]
  i636.m_fontSizeMin = i637[45]
  i636.m_fontSizeMax = i637[46]
  i636.m_fontStyle = i637[47]
  i636.m_HorizontalAlignment = i637[48]
  i636.m_VerticalAlignment = i637[49]
  i636.m_textAlignment = i637[50]
  i636.m_characterSpacing = i637[51]
  i636.m_wordSpacing = i637[52]
  i636.m_lineSpacing = i637[53]
  i636.m_lineSpacingMax = i637[54]
  i636.m_paragraphSpacing = i637[55]
  i636.m_charWidthMaxAdj = i637[56]
  i636.m_enableWordWrapping = !!i637[57]
  i636.m_wordWrappingRatios = i637[58]
  i636.m_overflowMode = i637[59]
  request.r(i637[60], i637[61], 0, i636, 'm_linkedTextComponent')
  request.r(i637[62], i637[63], 0, i636, 'parentLinkedComponent')
  i636.m_enableKerning = !!i637[64]
  i636.m_enableExtraPadding = !!i637[65]
  i636.checkPaddingRequired = !!i637[66]
  i636.m_isRichText = !!i637[67]
  i636.m_parseCtrlCharacters = !!i637[68]
  i636.m_isOrthographic = !!i637[69]
  i636.m_isCullingEnabled = !!i637[70]
  i636.m_horizontalMapping = i637[71]
  i636.m_verticalMapping = i637[72]
  i636.m_uvLineOffset = i637[73]
  i636.m_geometrySortingOrder = i637[74]
  i636.m_IsTextObjectScaleStatic = !!i637[75]
  i636.m_VertexBufferAutoSizeReduction = !!i637[76]
  i636.m_useMaxVisibleDescender = !!i637[77]
  i636.m_pageToDisplay = i637[78]
  i636.m_margin = new pc.Vec4( i637[79], i637[80], i637[81], i637[82] )
  i636.m_isUsingLegacyAnimationComponent = !!i637[83]
  i636.m_isVolumetricText = !!i637[84]
  request.r(i637[85], i637[86], 0, i636, 'm_Material')
  i636.m_Maskable = !!i637[87]
  i636.m_Color = new pc.Color(i637[88], i637[89], i637[90], i637[91])
  i636.m_RaycastTarget = !!i637[92]
  i636.m_RaycastPadding = new pc.Vec4( i637[93], i637[94], i637[95], i637[96] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.type = i643[1]
  i642.color = new pc.Color(i643[2], i643[3], i643[4], i643[5])
  i642.cullingMask = i643[6]
  i642.intensity = i643[7]
  i642.range = i643[8]
  i642.spotAngle = i643[9]
  i642.shadows = i643[10]
  i642.shadowNormalBias = i643[11]
  i642.shadowBias = i643[12]
  i642.shadowStrength = i643[13]
  i642.shadowResolution = i643[14]
  i642.lightmapBakeType = i643[15]
  i642.renderMode = i643[16]
  request.r(i643[17], i643[18], 0, i642, 'cookie')
  i642.cookieSize = i643[19]
  return i642
}

Deserializers["CardLayer"] = function (request, data, root) {
  var i644 = root || request.c( 'CardLayer' )
  var i645 = data
  i644.myTurn = !!i645[0]
  i644.straightGin = i645[1]
  i644.discardedCards = i645[2]
  i644.handStartCards = i645[3]
  i644.deckCards = i645[4]
  i644.opponentThrowCardNo = i645[5]
  i644.opponentPlay = i645[6]
  i644.opponentWinConditionTargetPlayIndex = i645[7]
  request.r(i645[8], i645[9], 0, i644, 'cardPool')
  request.r(i645[10], i645[11], 0, i644, 'handController')
  request.r(i645[12], i645[13], 0, i644, 'deckController')
  request.r(i645[14], i645[15], 0, i644, 'throwController')
  request.r(i645[16], i645[17], 0, i644, 'dragController')
  request.r(i645[18], i645[19], 0, i644, 'opponentController')
  request.r(i645[20], i645[21], 0, i644, 'gameActionButton')
  i644._opponentPlayCounter = i645[22]
  i644.pickDelay = i645[23]
  i644.throwDelay = i645[24]
  i644.cardsStartCount = i645[25]
  return i644
}

Deserializers["CardPool"] = function (request, data, root) {
  var i646 = root || request.c( 'CardPool' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'cardPrefab')
  return i646
}

Deserializers["HandController"] = function (request, data, root) {
  var i648 = root || request.c( 'HandController' )
  var i649 = data
  i648.sortingOrderMultiplier = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'slotPrefab')
  var i651 = i649[3]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i648.slotsPool = i650
  i648.duration = i649[4]
  i648.ease = i649[5]
  return i648
}

Deserializers["HandSlotArc"] = function (request, data, root) {
  var i654 = root || request.c( 'HandSlotArc' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'handSettingsSo')
  return i654
}

Deserializers["DragController"] = function (request, data, root) {
  var i656 = root || request.c( 'DragController' )
  var i657 = data
  i656.lastPickedCardFromThrowZoneNo = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'draggingCard')
  i656.fullDisable = !!i657[3]
  i656.canFreeControl = !!i657[4]
  i656.canPickCardFromDeck = !!i657[5]
  i656.canPickCardFromThrow = !!i657[6]
  i656.canThrowCard = !!i657[7]
  request.r(i657[8], i657[9], 0, i656, 'gameCamera')
  i656.planeMask = UnityEngine.LayerMask.FromIntegerValue( i657[10] )
  i656.cardMask = UnityEngine.LayerMask.FromIntegerValue( i657[11] )
  request.r(i657[12], i657[13], 0, i656, 'slot')
  request.r(i657[14], i657[15], 0, i656, 'handEdge')
  return i656
}

Deserializers["ThrowController"] = function (request, data, root) {
  var i658 = root || request.c( 'ThrowController' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'slotPrefab')
  i658.offset = new pc.Vec3( i659[2], i659[3], i659[4] )
  i658.duration = i659[5]
  i658.ease = i659[6]
  i658.sortingOrderMultiplier = i659[7]
  var i661 = i659[8]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 1, i660, '')
  }
  i658.slotPool = i660
  return i658
}

Deserializers["DeckController"] = function (request, data, root) {
  var i662 = root || request.c( 'DeckController' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'slotPrefab')
  i662.offset = new pc.Vec3( i663[2], i663[3], i663[4] )
  i662.sortingOrderMultiplier = i663[5]
  var i665 = i663[6]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.slotPool = i664
  return i662
}

Deserializers["OpponentController"] = function (request, data, root) {
  var i666 = root || request.c( 'OpponentController' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'slotPrefab')
  i666.duration = i667[2]
  i666.ease = i667[3]
  i666.sortingOrderMultiplier = i667[4]
  var i669 = i667[5]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 1, i668, '')
  }
  i666.slotPool = i668
  return i666
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_FirstSelected')
  i670.m_sendNavigationEvents = !!i671[2]
  i670.m_DragThreshold = i671[3]
  return i670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i673 = data
  i672.m_HorizontalAxis = i673[0]
  i672.m_VerticalAxis = i673[1]
  i672.m_SubmitButton = i673[2]
  i672.m_CancelButton = i673[3]
  i672.m_InputActionsPerSecond = i673[4]
  i672.m_RepeatDelay = i673[5]
  i672.m_ForceModuleActive = !!i673[6]
  i672.m_SendPointerHoverToParent = !!i673[7]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i675 = data
  i674.ambientIntensity = i675[0]
  i674.reflectionIntensity = i675[1]
  i674.ambientMode = i675[2]
  i674.ambientLight = new pc.Color(i675[3], i675[4], i675[5], i675[6])
  i674.ambientSkyColor = new pc.Color(i675[7], i675[8], i675[9], i675[10])
  i674.ambientGroundColor = new pc.Color(i675[11], i675[12], i675[13], i675[14])
  i674.ambientEquatorColor = new pc.Color(i675[15], i675[16], i675[17], i675[18])
  i674.fogColor = new pc.Color(i675[19], i675[20], i675[21], i675[22])
  i674.fogEndDistance = i675[23]
  i674.fogStartDistance = i675[24]
  i674.fogDensity = i675[25]
  i674.fog = !!i675[26]
  request.r(i675[27], i675[28], 0, i674, 'skybox')
  i674.fogMode = i675[29]
  var i677 = i675[30]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i677[i + 0]) );
  }
  i674.lightmaps = i676
  i674.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i675[31], i674.lightProbes)
  i674.lightmapsMode = i675[32]
  i674.mixedBakeMode = i675[33]
  i674.environmentLightingMode = i675[34]
  i674.ambientProbe = new pc.SphericalHarmonicsL2(i675[35])
  i674.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i675[36])
  i674.useReferenceAmbientProbe = !!i675[37]
  request.r(i675[38], i675[39], 0, i674, 'customReflection')
  request.r(i675[40], i675[41], 0, i674, 'defaultReflection')
  i674.defaultReflectionMode = i675[42]
  i674.defaultReflectionResolution = i675[43]
  i674.sunLightObjectId = i675[44]
  i674.pixelLightCount = i675[45]
  i674.defaultReflectionHDR = !!i675[46]
  i674.hasLightDataAsset = !!i675[47]
  i674.hasManualGenerate = !!i675[48]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'lightmapColor')
  request.r(i681[2], i681[3], 0, i680, 'lightmapDirection')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i682 = root || new UnityEngine.LightProbes()
  var i683 = data
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i691 = data
  var i693 = i691[0]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i693[i + 0]));
  }
  i690.ShaderCompilationErrors = i692
  i690.name = i691[1]
  i690.guid = i691[2]
  var i695 = i691[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i690.shaderDefinedKeywords = i694
  var i697 = i691[4]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i697[i + 0]) );
  }
  i690.passes = i696
  var i699 = i691[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i699[i + 0]) );
  }
  i690.usePasses = i698
  var i701 = i691[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i701[i + 0]) );
  }
  i690.defaultParameterValues = i700
  request.r(i691[7], i691[8], 0, i690, 'unityFallbackShader')
  i690.readDepth = !!i691[9]
  i690.isCreatedByShaderGraph = !!i691[10]
  i690.compiled = !!i691[11]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i705 = data
  i704.shaderName = i705[0]
  i704.errorMessage = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i710 = root || new pc.UnityShaderPass()
  var i711 = data
  i710.id = i711[0]
  i710.subShaderIndex = i711[1]
  i710.name = i711[2]
  i710.passType = i711[3]
  i710.grabPassTextureName = i711[4]
  i710.usePass = !!i711[5]
  i710.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[6], i710.zTest)
  i710.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[7], i710.zWrite)
  i710.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[8], i710.culling)
  i710.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i711[9], i710.blending)
  i710.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i711[10], i710.alphaBlending)
  i710.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[11], i710.colorWriteMask)
  i710.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[12], i710.offsetUnits)
  i710.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[13], i710.offsetFactor)
  i710.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[14], i710.stencilRef)
  i710.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[15], i710.stencilReadMask)
  i710.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[16], i710.stencilWriteMask)
  i710.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i711[17], i710.stencilOp)
  i710.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i711[18], i710.stencilOpFront)
  i710.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i711[19], i710.stencilOpBack)
  var i713 = i711[20]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i713[i + 0]) );
  }
  i710.tags = i712
  var i715 = i711[21]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( i715[i + 0] );
  }
  i710.passDefinedKeywords = i714
  var i717 = i711[22]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i717[i + 0]) );
  }
  i710.passDefinedKeywordGroups = i716
  var i719 = i711[23]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i719[i + 0]) );
  }
  i710.variants = i718
  var i721 = i711[24]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i721[i + 0]) );
  }
  i710.excludedVariants = i720
  i710.hasDepthReader = !!i711[25]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i723 = data
  i722.val = i723[0]
  i722.name = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i725 = data
  i724.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[0], i724.src)
  i724.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[1], i724.dst)
  i724.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[2], i724.op)
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i727 = data
  i726.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[0], i726.pass)
  i726.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[1], i726.fail)
  i726.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[2], i726.zFail)
  i726.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[3], i726.comp)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i731 = data
  i730.name = i731[0]
  i730.value = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i734.keywords = i736
  i734.hasDiscard = !!i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i741 = data
  i740.passId = i741[0]
  i740.subShaderIndex = i741[1]
  var i743 = i741[2]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i740.keywords = i742
  i740.vertexProgram = i741[3]
  i740.fragmentProgram = i741[4]
  i740.exportedForWebGl2 = !!i741[5]
  i740.readDepth = !!i741[6]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'shader')
  i746.pass = i747[2]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i751 = data
  i750.name = i751[0]
  i750.type = i751[1]
  i750.value = new pc.Vec4( i751[2], i751[3], i751[4], i751[5] )
  i750.textureValue = i751[6]
  i750.shaderPropertyFlag = i751[7]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i753 = data
  i752.name = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'texture')
  i752.aabb = i753[3]
  i752.vertices = i753[4]
  i752.triangles = i753[5]
  i752.textureRect = UnityEngine.Rect.MinMaxRect(i753[6], i753[7], i753[8], i753[9])
  i752.packedRect = UnityEngine.Rect.MinMaxRect(i753[10], i753[11], i753[12], i753[13])
  i752.border = new pc.Vec4( i753[14], i753[15], i753[16], i753[17] )
  i752.transparency = i753[18]
  i752.bounds = i753[19]
  i752.pixelsPerUnit = i753[20]
  i752.textureWidth = i753[21]
  i752.textureHeight = i753[22]
  i752.nativeSize = new pc.Vec2( i753[23], i753[24] )
  i752.pivot = new pc.Vec2( i753[25], i753[26] )
  i752.textureRectOffset = new pc.Vec2( i753[27], i753[28] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i755 = data
  i754.name = i755[0]
  i754.ascent = i755[1]
  i754.originalLineHeight = i755[2]
  i754.fontSize = i755[3]
  var i757 = i755[4]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i757[i + 0]) );
  }
  i754.characterInfo = i756
  request.r(i755[5], i755[6], 0, i754, 'texture')
  i754.originalFontSize = i755[7]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i761 = data
  i760.index = i761[0]
  i760.advance = i761[1]
  i760.bearing = i761[2]
  i760.glyphWidth = i761[3]
  i760.glyphHeight = i761[4]
  i760.minX = i761[5]
  i760.maxX = i761[6]
  i760.minY = i761[7]
  i760.maxY = i761[8]
  i760.uvBottomLeftX = i761[9]
  i760.uvBottomLeftY = i761[10]
  i760.uvBottomRightX = i761[11]
  i760.uvBottomRightY = i761[12]
  i760.uvTopLeftX = i761[13]
  i760.uvTopLeftY = i761[14]
  i760.uvTopRightX = i761[15]
  i760.uvTopRightY = i761[16]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i763 = data
  i762.name = i763[0]
  i762.bytes64 = i763[1]
  i762.data = i763[2]
  return i762
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i764 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i765 = data
  i764.hashCode = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'material')
  i764.materialHashCode = i765[3]
  request.r(i765[4], i765[5], 0, i764, 'atlas')
  i764.normalStyle = i765[6]
  i764.normalSpacingOffset = i765[7]
  i764.boldStyle = i765[8]
  i764.boldSpacing = i765[9]
  i764.italicStyle = i765[10]
  i764.tabSize = i765[11]
  i764.m_Version = i765[12]
  i764.m_SourceFontFileGUID = i765[13]
  request.r(i765[14], i765[15], 0, i764, 'm_SourceFontFile_EditorRef')
  request.r(i765[16], i765[17], 0, i764, 'm_SourceFontFile')
  i764.m_AtlasPopulationMode = i765[18]
  i764.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i765[19], i764.m_FaceInfo)
  var i767 = i765[20]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('UnityEngine.TextCore.Glyph', i767[i + 0]));
  }
  i764.m_GlyphTable = i766
  var i769 = i765[21]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_Character', i769[i + 0]));
  }
  i764.m_CharacterTable = i768
  var i771 = i765[22]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i764.m_AtlasTextures = i770
  i764.m_AtlasTextureIndex = i765[23]
  i764.m_IsMultiAtlasTexturesEnabled = !!i765[24]
  i764.m_ClearDynamicDataOnBuild = !!i765[25]
  var i773 = i765[26]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.TextCore.GlyphRect', i773[i + 0]));
  }
  i764.m_UsedGlyphRects = i772
  var i775 = i765[27]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UnityEngine.TextCore.GlyphRect', i775[i + 0]));
  }
  i764.m_FreeGlyphRects = i774
  i764.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i765[28], i764.m_fontInfo)
  i764.m_AtlasWidth = i765[29]
  i764.m_AtlasHeight = i765[30]
  i764.m_AtlasPadding = i765[31]
  i764.m_AtlasRenderMode = i765[32]
  var i777 = i765[33]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('TMPro.TMP_Glyph', i777[i + 0]));
  }
  i764.m_glyphInfoList = i776
  i764.m_KerningTable = request.d('TMPro.KerningTable', i765[34], i764.m_KerningTable)
  i764.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i765[35], i764.m_FontFeatureTable)
  var i779 = i765[36]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 1, i778, '')
  }
  i764.fallbackFontAssets = i778
  var i781 = i765[37]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i764.m_FallbackFontAssetTable = i780
  i764.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i765[38], i764.m_CreationSettings)
  var i783 = i765[39]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('TMPro.TMP_FontWeightPair', i783[i + 0]) );
  }
  i764.m_FontWeightTable = i782
  var i785 = i765[40]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('TMPro.TMP_FontWeightPair', i785[i + 0]) );
  }
  i764.fontWeights = i784
  return i764
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i787 = data
  i786.m_FaceIndex = i787[0]
  i786.m_FamilyName = i787[1]
  i786.m_StyleName = i787[2]
  i786.m_PointSize = i787[3]
  i786.m_Scale = i787[4]
  i786.m_UnitsPerEM = i787[5]
  i786.m_LineHeight = i787[6]
  i786.m_AscentLine = i787[7]
  i786.m_CapLine = i787[8]
  i786.m_MeanLine = i787[9]
  i786.m_Baseline = i787[10]
  i786.m_DescentLine = i787[11]
  i786.m_SuperscriptOffset = i787[12]
  i786.m_SuperscriptSize = i787[13]
  i786.m_SubscriptOffset = i787[14]
  i786.m_SubscriptSize = i787[15]
  i786.m_UnderlineOffset = i787[16]
  i786.m_UnderlineThickness = i787[17]
  i786.m_StrikethroughOffset = i787[18]
  i786.m_StrikethroughThickness = i787[19]
  i786.m_TabWidth = i787[20]
  return i786
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i791 = data
  i790.m_Index = i791[0]
  i790.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i791[1], i790.m_Metrics)
  i790.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i791[2], i790.m_GlyphRect)
  i790.m_Scale = i791[3]
  i790.m_AtlasIndex = i791[4]
  i790.m_ClassDefinitionType = i791[5]
  return i790
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i793 = data
  i792.m_Width = i793[0]
  i792.m_Height = i793[1]
  i792.m_HorizontalBearingX = i793[2]
  i792.m_HorizontalBearingY = i793[3]
  i792.m_HorizontalAdvance = i793[4]
  return i792
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i795 = data
  i794.m_X = i795[0]
  i794.m_Y = i795[1]
  i794.m_Width = i795[2]
  i794.m_Height = i795[3]
  return i794
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_Character' )
  var i799 = data
  i798.m_ElementType = i799[0]
  i798.m_Unicode = i799[1]
  i798.m_GlyphIndex = i799[2]
  i798.m_Scale = i799[3]
  return i798
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i805 = data
  i804.Name = i805[0]
  i804.PointSize = i805[1]
  i804.Scale = i805[2]
  i804.CharacterCount = i805[3]
  i804.LineHeight = i805[4]
  i804.Baseline = i805[5]
  i804.Ascender = i805[6]
  i804.CapHeight = i805[7]
  i804.Descender = i805[8]
  i804.CenterLine = i805[9]
  i804.SuperscriptOffset = i805[10]
  i804.SubscriptOffset = i805[11]
  i804.SubSize = i805[12]
  i804.Underline = i805[13]
  i804.UnderlineThickness = i805[14]
  i804.strikethrough = i805[15]
  i804.strikethroughThickness = i805[16]
  i804.TabWidth = i805[17]
  i804.Padding = i805[18]
  i804.AtlasWidth = i805[19]
  i804.AtlasHeight = i805[20]
  return i804
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_Glyph' )
  var i809 = data
  i808.id = i809[0]
  i808.x = i809[1]
  i808.y = i809[2]
  i808.width = i809[3]
  i808.height = i809[4]
  i808.xOffset = i809[5]
  i808.yOffset = i809[6]
  i808.xAdvance = i809[7]
  i808.scale = i809[8]
  return i808
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.KerningTable' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.KerningPair', i813[i + 0]));
  }
  i810.kerningPairs = i812
  return i810
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.KerningPair' )
  var i817 = data
  i816.xOffset = i817[0]
  i816.m_FirstGlyph = i817[1]
  i816.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i817[2], i816.m_FirstGlyphAdjustments)
  i816.m_SecondGlyph = i817[3]
  i816.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i817[4], i816.m_SecondGlyphAdjustments)
  i816.m_IgnoreSpacingAdjustments = !!i817[5]
  return i816
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i821[i + 0]));
  }
  i818.m_GlyphPairAdjustmentRecords = i820
  return i818
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i825 = data
  i824.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i825[0], i824.m_FirstAdjustmentRecord)
  i824.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i825[1], i824.m_SecondAdjustmentRecord)
  i824.m_FeatureLookupFlags = i825[2]
  return i824
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i827 = data
  i826.m_GlyphIndex = i827[0]
  i826.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i827[1], i826.m_GlyphValueRecord)
  return i826
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i829 = data
  i828.m_XPlacement = i829[0]
  i828.m_YPlacement = i829[1]
  i828.m_XAdvance = i829[2]
  i828.m_YAdvance = i829[3]
  return i828
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i833 = data
  i832.sourceFontFileName = i833[0]
  i832.sourceFontFileGUID = i833[1]
  i832.pointSizeSamplingMode = i833[2]
  i832.pointSize = i833[3]
  i832.padding = i833[4]
  i832.packingMode = i833[5]
  i832.atlasWidth = i833[6]
  i832.atlasHeight = i833[7]
  i832.characterSetSelectionMode = i833[8]
  i832.characterSequence = i833[9]
  i832.referencedFontAssetGUID = i833[10]
  i832.referencedTextAssetGUID = i833[11]
  i832.fontStyle = i833[12]
  i832.fontStyleModifier = i833[13]
  i832.renderMode = i833[14]
  i832.includeFontFeatures = !!i833[15]
  return i832
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'regularTypeface')
  request.r(i837[2], i837[3], 0, i836, 'italicTypeface')
  return i836
}

Deserializers["HandSettingsSO"] = function (request, data, root) {
  var i838 = root || request.c( 'HandSettingsSO' )
  var i839 = data
  i838.handHeight = i839[0]
  i838.handWidth = i839[1]
  i838.maxCardAngle = i839[2]
  i838.yPerCard = i839[3]
  i838.zDistance = i839[4]
  i838.handY = i839[5]
  i838.handZ = i839[6]
  return i838
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i841 = data
  i840.useSafeMode = !!i841[0]
  i840.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i841[1], i840.safeModeOptions)
  i840.timeScale = i841[2]
  i840.unscaledTimeScale = i841[3]
  i840.useSmoothDeltaTime = !!i841[4]
  i840.maxSmoothUnscaledTime = i841[5]
  i840.rewindCallbackMode = i841[6]
  i840.showUnityEditorReport = !!i841[7]
  i840.logBehaviour = i841[8]
  i840.drawGizmos = !!i841[9]
  i840.defaultRecyclable = !!i841[10]
  i840.defaultAutoPlay = i841[11]
  i840.defaultUpdateType = i841[12]
  i840.defaultTimeScaleIndependent = !!i841[13]
  i840.defaultEaseType = i841[14]
  i840.defaultEaseOvershootOrAmplitude = i841[15]
  i840.defaultEasePeriod = i841[16]
  i840.defaultAutoKill = !!i841[17]
  i840.defaultLoopType = i841[18]
  i840.debugMode = !!i841[19]
  i840.debugStoreTargetId = !!i841[20]
  i840.showPreviewPanel = !!i841[21]
  i840.storeSettingsLocation = i841[22]
  i840.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i841[23], i840.modules)
  i840.createASMDEF = !!i841[24]
  i840.showPlayingTweens = !!i841[25]
  i840.showPausedTweens = !!i841[26]
  return i840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i843 = data
  i842.logBehaviour = i843[0]
  i842.nestedTweenFailureBehaviour = i843[1]
  return i842
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i845 = data
  i844.showPanel = !!i845[0]
  i844.audioEnabled = !!i845[1]
  i844.physicsEnabled = !!i845[2]
  i844.physics2DEnabled = !!i845[3]
  i844.spriteEnabled = !!i845[4]
  i844.uiEnabled = !!i845[5]
  i844.textMeshProEnabled = !!i845[6]
  i844.tk2DEnabled = !!i845[7]
  i844.deAudioEnabled = !!i845[8]
  i844.deUnityExtendedEnabled = !!i845[9]
  i844.epoOutlineEnabled = !!i845[10]
  return i844
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_Settings' )
  var i847 = data
  i846.m_enableWordWrapping = !!i847[0]
  i846.m_enableKerning = !!i847[1]
  i846.m_enableExtraPadding = !!i847[2]
  i846.m_enableTintAllSprites = !!i847[3]
  i846.m_enableParseEscapeCharacters = !!i847[4]
  i846.m_EnableRaycastTarget = !!i847[5]
  i846.m_GetFontFeaturesAtRuntime = !!i847[6]
  i846.m_missingGlyphCharacter = i847[7]
  i846.m_warningsDisabled = !!i847[8]
  request.r(i847[9], i847[10], 0, i846, 'm_defaultFontAsset')
  i846.m_defaultFontAssetPath = i847[11]
  i846.m_defaultFontSize = i847[12]
  i846.m_defaultAutoSizeMinRatio = i847[13]
  i846.m_defaultAutoSizeMaxRatio = i847[14]
  i846.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i847[15], i847[16] )
  i846.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i847[17], i847[18] )
  i846.m_autoSizeTextContainer = !!i847[19]
  i846.m_IsTextObjectScaleStatic = !!i847[20]
  var i849 = i847[21]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 1, i848, '')
  }
  i846.m_fallbackFontAssets = i848
  i846.m_matchMaterialPreset = !!i847[22]
  request.r(i847[23], i847[24], 0, i846, 'm_defaultSpriteAsset')
  i846.m_defaultSpriteAssetPath = i847[25]
  i846.m_enableEmojiSupport = !!i847[26]
  i846.m_MissingCharacterSpriteUnicode = i847[27]
  i846.m_defaultColorGradientPresetsPath = i847[28]
  request.r(i847[29], i847[30], 0, i846, 'm_defaultStyleSheet')
  i846.m_StyleSheetsResourcePath = i847[31]
  request.r(i847[32], i847[33], 0, i846, 'm_leadingCharacters')
  request.r(i847[34], i847[35], 0, i846, 'm_followingCharacters')
  i846.m_UseModernHangulLineBreakingRules = !!i847[36]
  return i846
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i851 = data
  i850.hashCode = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'material')
  i850.materialHashCode = i851[3]
  request.r(i851[4], i851[5], 0, i850, 'spriteSheet')
  var i853 = i851[6]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_Sprite', i853[i + 0]));
  }
  i850.spriteInfoList = i852
  var i855 = i851[7]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i850.fallbackSpriteAssets = i854
  i850.m_Version = i851[8]
  i850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i851[9], i850.m_FaceInfo)
  var i857 = i851[10]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.TMP_SpriteCharacter', i857[i + 0]));
  }
  i850.m_SpriteCharacterTable = i856
  var i859 = i851[11]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_SpriteGlyph', i859[i + 0]));
  }
  i850.m_SpriteGlyphTable = i858
  return i850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i863 = data
  i862.name = i863[0]
  i862.hashCode = i863[1]
  i862.unicode = i863[2]
  i862.pivot = new pc.Vec2( i863[3], i863[4] )
  request.r(i863[5], i863[6], 0, i862, 'sprite')
  i862.id = i863[7]
  i862.x = i863[8]
  i862.y = i863[9]
  i862.width = i863[10]
  i862.height = i863[11]
  i862.xOffset = i863[12]
  i862.yOffset = i863[13]
  i862.xAdvance = i863[14]
  i862.scale = i863[15]
  return i862
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i869 = data
  i868.m_Name = i869[0]
  i868.m_HashCode = i869[1]
  i868.m_ElementType = i869[2]
  i868.m_Unicode = i869[3]
  i868.m_GlyphIndex = i869[4]
  i868.m_Scale = i869[5]
  return i868
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'sprite')
  i872.m_Index = i873[2]
  i872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i873[3], i872.m_Metrics)
  i872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i873[4], i872.m_GlyphRect)
  i872.m_Scale = i873[5]
  i872.m_AtlasIndex = i873[6]
  i872.m_ClassDefinitionType = i873[7]
  return i872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i875 = data
  var i877 = i875[0]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('TMPro.TMP_Style', i877[i + 0]));
  }
  i874.m_StyleList = i876
  return i874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_Style' )
  var i881 = data
  i880.m_Name = i881[0]
  i880.m_HashCode = i881[1]
  i880.m_OpeningDefinition = i881[2]
  i880.m_ClosingDefinition = i881[3]
  i880.m_OpeningTagArray = i881[4]
  i880.m_ClosingTagArray = i881[5]
  i880.m_OpeningTagUnicodeArray = i881[6]
  i880.m_ClosingTagUnicodeArray = i881[7]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i883 = data
  var i885 = i883[0]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i885[i + 0]) );
  }
  i882.files = i884
  i882.componentToPrefabIds = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i889 = data
  i888.path = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'unityObject')
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i893[i + 0]) );
  }
  i890.scriptsExecutionOrder = i892
  var i895 = i891[1]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i895[i + 0]) );
  }
  i890.sortingLayers = i894
  var i897 = i891[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i897[i + 0]) );
  }
  i890.cullingLayers = i896
  i890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i891[3], i890.timeSettings)
  i890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i891[4], i890.physicsSettings)
  i890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i891[5], i890.physics2DSettings)
  i890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[6], i890.qualitySettings)
  i890.enableRealtimeShadows = !!i891[7]
  i890.enableAutoInstancing = !!i891[8]
  i890.enableDynamicBatching = !!i891[9]
  i890.lightmapEncodingQuality = i891[10]
  i890.desiredColorSpace = i891[11]
  var i899 = i891[12]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i890.allTags = i898
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i903 = data
  i902.name = i903[0]
  i902.value = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  i906.value = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i913 = data
  i912.fixedDeltaTime = i913[0]
  i912.maximumDeltaTime = i913[1]
  i912.timeScale = i913[2]
  i912.maximumParticleTimestep = i913[3]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i915 = data
  i914.gravity = new pc.Vec3( i915[0], i915[1], i915[2] )
  i914.defaultSolverIterations = i915[3]
  i914.bounceThreshold = i915[4]
  i914.autoSyncTransforms = !!i915[5]
  i914.autoSimulation = !!i915[6]
  var i917 = i915[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i917[i + 0]) );
  }
  i914.collisionMatrix = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i921 = data
  i920.enabled = !!i921[0]
  i920.layerId = i921[1]
  i920.otherLayerId = i921[2]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'material')
  i922.gravity = new pc.Vec2( i923[2], i923[3] )
  i922.positionIterations = i923[4]
  i922.velocityIterations = i923[5]
  i922.velocityThreshold = i923[6]
  i922.maxLinearCorrection = i923[7]
  i922.maxAngularCorrection = i923[8]
  i922.maxTranslationSpeed = i923[9]
  i922.maxRotationSpeed = i923[10]
  i922.baumgarteScale = i923[11]
  i922.baumgarteTOIScale = i923[12]
  i922.timeToSleep = i923[13]
  i922.linearSleepTolerance = i923[14]
  i922.angularSleepTolerance = i923[15]
  i922.defaultContactOffset = i923[16]
  i922.autoSimulation = !!i923[17]
  i922.queriesHitTriggers = !!i923[18]
  i922.queriesStartInColliders = !!i923[19]
  i922.callbacksOnDisable = !!i923[20]
  i922.reuseCollisionCallbacks = !!i923[21]
  i922.autoSyncTransforms = !!i923[22]
  var i925 = i923[23]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i925[i + 0]) );
  }
  i922.collisionMatrix = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i929 = data
  i928.enabled = !!i929[0]
  i928.layerId = i929[1]
  i928.otherLayerId = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i933[i + 0]) );
  }
  i930.qualityLevels = i932
  var i935 = i931[1]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i930.names = i934
  i930.shadows = i931[2]
  i930.anisotropicFiltering = i931[3]
  i930.antiAliasing = i931[4]
  i930.lodBias = i931[5]
  i930.shadowCascades = i931[6]
  i930.shadowDistance = i931[7]
  i930.shadowmaskMode = i931[8]
  i930.shadowProjection = i931[9]
  i930.shadowResolution = i931[10]
  i930.softParticles = !!i931[11]
  i930.softVegetation = !!i931[12]
  i930.activeColorSpace = i931[13]
  i930.desiredColorSpace = i931[14]
  i930.masterTextureLimit = i931[15]
  i930.maxQueuedFrames = i931[16]
  i930.particleRaycastBudget = i931[17]
  i930.pixelLightCount = i931[18]
  i930.realtimeReflectionProbes = !!i931[19]
  i930.shadowCascade2Split = i931[20]
  i930.shadowCascade4Split = new pc.Vec3( i931[21], i931[22], i931[23] )
  i930.streamingMipmapsActive = !!i931[24]
  i930.vSyncCount = i931[25]
  i930.asyncUploadBufferSize = i931[26]
  i930.asyncUploadTimeSlice = i931[27]
  i930.billboardsFaceCameraPosition = !!i931[28]
  i930.shadowNearPlaneOffset = i931[29]
  i930.streamingMipmapsMemoryBudget = i931[30]
  i930.maximumLODLevel = i931[31]
  i930.streamingMipmapsAddAllCameras = !!i931[32]
  i930.streamingMipmapsMaxLevelReduction = i931[33]
  i930.streamingMipmapsRenderersPerFrame = i931[34]
  i930.resolutionScalingFixedDPIFactor = i931[35]
  i930.streamingMipmapsMaxFileIORequests = i931[36]
  i930.currentQualityLevel = i931[37]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i941 = data
  i940.weight = i941[0]
  i940.vertices = i941[1]
  i940.normals = i941[2]
  i940.tangents = i941[3]
  return i940
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i943 = data
  i942.xPlacement = i943[0]
  i942.yPlacement = i943[1]
  i942.xAdvance = i943[2]
  i942.yAdvance = i943[3]
  return i942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[18],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[18],"79":[6],"80":[81],"82":[81],"20":[12],"26":[35],"83":[84],"85":[8],"86":[84],"87":[12],"88":[12],"22":[20],"24":[23,12],"89":[12],"21":[20],"90":[12],"91":[12],"92":[12],"93":[12],"94":[12],"95":[12],"96":[12],"97":[12],"98":[12],"99":[23,12],"100":[12],"101":[12],"102":[12],"103":[12],"104":[23,12],"105":[12],"106":[37],"107":[37],"38":[37],"108":[37],"109":[18],"110":[18],"111":[12],"7":[6,12],"27":[12,23],"112":[12],"113":[23,12],"114":[6],"115":[23,12],"116":[12],"117":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","GameActionButton","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.SpriteRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","Card","UnityEngine.GameObject","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HandController","TMPro.TextMeshProUGUI","UnityEngine.Light","CardLayer","CardPool","DeckController","ThrowController","DragController","OpponentController","HandSlotArc","HandSettingsSO","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.39f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "02/13/2025 12:27:01";

Deserializers.lunaDaysRunning = "11.0";

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

Deserializers.buildID = "0a047ee4-b8b8-4796-8249-a792099118df";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

