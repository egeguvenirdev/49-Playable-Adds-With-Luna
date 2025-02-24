var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.JointSpring' )
  var i1417 = data
  i1416.spring = i1417[0]
  i1416.damper = i1417[1]
  i1416.targetPosition = i1417[2]
  return i1416
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.JointMotor' )
  var i1419 = data
  i1418.m_TargetVelocity = i1419[0]
  i1418.m_Force = i1419[1]
  i1418.m_FreeSpin = i1419[2]
  return i1418
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.JointLimits' )
  var i1421 = data
  i1420.m_Min = i1421[0]
  i1420.m_Max = i1421[1]
  i1420.m_Bounciness = i1421[2]
  i1420.m_BounceMinVelocity = i1421[3]
  i1420.m_ContactDistance = i1421[4]
  i1420.minBounce = i1421[5]
  i1420.maxBounce = i1421[6]
  return i1420
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.JointDrive' )
  var i1423 = data
  i1422.m_PositionSpring = i1423[0]
  i1422.m_PositionDamper = i1423[1]
  i1422.m_MaximumForce = i1423[2]
  i1422.m_UseAcceleration = i1423[3]
  return i1422
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1425 = data
  i1424.m_Spring = i1425[0]
  i1424.m_Damper = i1425[1]
  return i1424
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1427 = data
  i1426.m_Limit = i1427[0]
  i1426.m_Bounciness = i1427[1]
  i1426.m_ContactDistance = i1427[2]
  return i1426
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1429 = data
  i1428.m_ExtremumSlip = i1429[0]
  i1428.m_ExtremumValue = i1429[1]
  i1428.m_AsymptoteSlip = i1429[2]
  i1428.m_AsymptoteValue = i1429[3]
  i1428.m_Stiffness = i1429[4]
  return i1428
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1431 = data
  i1430.m_LowerAngle = i1431[0]
  i1430.m_UpperAngle = i1431[1]
  return i1430
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1433 = data
  i1432.m_MotorSpeed = i1433[0]
  i1432.m_MaximumMotorTorque = i1433[1]
  return i1432
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1435 = data
  i1434.m_DampingRatio = i1435[0]
  i1434.m_Frequency = i1435[1]
  i1434.m_Angle = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1437 = data
  i1436.m_LowerTranslation = i1437[0]
  i1436.m_UpperTranslation = i1437[1]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1438 = root || new pc.UnityMaterial()
  var i1439 = data
  i1438.name = i1439[0]
  request.r(i1439[1], i1439[2], 0, i1438, 'shader')
  i1438.renderQueue = i1439[3]
  i1438.enableInstancing = !!i1439[4]
  var i1441 = i1439[5]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1441[i + 0]) );
  }
  i1438.floatParameters = i1440
  var i1443 = i1439[6]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1443[i + 0]) );
  }
  i1438.colorParameters = i1442
  var i1445 = i1439[7]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1445[i + 0]) );
  }
  i1438.vectorParameters = i1444
  var i1447 = i1439[8]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1447[i + 0]) );
  }
  i1438.textureParameters = i1446
  var i1449 = i1439[9]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1449[i + 0]) );
  }
  i1438.materialFlags = i1448
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1453 = data
  i1452.name = i1453[0]
  i1452.value = i1453[1]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = new pc.Color(i1457[1], i1457[2], i1457[3], i1457[4])
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.value = new pc.Vec4( i1461[1], i1461[2], i1461[3], i1461[4] )
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1465 = data
  i1464.name = i1465[0]
  request.r(i1465[1], i1465[2], 0, i1464, 'value')
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.enabled = !!i1469[1]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.width = i1471[1]
  i1470.height = i1471[2]
  i1470.mipmapCount = i1471[3]
  i1470.anisoLevel = i1471[4]
  i1470.filterMode = i1471[5]
  i1470.hdr = !!i1471[6]
  i1470.format = i1471[7]
  i1470.wrapMode = i1471[8]
  i1470.alphaIsTransparency = !!i1471[9]
  i1470.alphaSource = i1471[10]
  i1470.graphicsFormat = i1471[11]
  i1470.sRGBTexture = !!i1471[12]
  i1470.desiredColorSpace = i1471[13]
  i1470.wrapU = i1471[14]
  i1470.wrapV = i1471[15]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1473 = data
  i1472.position = new pc.Vec3( i1473[0], i1473[1], i1473[2] )
  i1472.scale = new pc.Vec3( i1473[3], i1473[4], i1473[5] )
  i1472.rotation = new pc.Quat(i1473[6], i1473[7], i1473[8], i1473[9])
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1475 = data
  i1474.center = new pc.Vec3( i1475[0], i1475[1], i1475[2] )
  i1474.size = new pc.Vec3( i1475[3], i1475[4], i1475[5] )
  i1474.enabled = !!i1475[6]
  i1474.isTrigger = !!i1475[7]
  request.r(i1475[8], i1475[9], 0, i1474, 'material')
  return i1474
}

Deserializers["GameActionButton"] = function (request, data, root) {
  var i1476 = root || request.c( 'GameActionButton' )
  var i1477 = data
  request.r(i1477[0], i1477[1], 0, i1476, 'holder')
  i1476.gameActionButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1477[2] )
  i1476.moveUpY = i1477[3]
  i1476.moveDownY = i1477[4]
  request.r(i1477[5], i1477[6], 0, i1476, 'textureGin')
  request.r(i1477[7], i1477[8], 0, i1476, 'texturePass')
  request.r(i1477[9], i1477[10], 0, i1476, 'textureKnock')
  request.r(i1477[11], i1477[12], 0, i1476, 'buttonMeshRenderer')
  request.r(i1477[13], i1477[14], 0, i1476, 'buttonTransform')
  request.r(i1477[15], i1477[16], 0, i1476, 'knockValueText')
  i1476.rayDistance = i1477[17]
  request.r(i1477[18], i1477[19], 0, i1476, 'shadowSpriteRenderer')
  request.r(i1477[20], i1477[21], 0, i1476, 'shadowTransform')
  request.r(i1477[22], i1477[23], 0, i1476, 'frameSpriteRenderer')
  request.r(i1477[24], i1477[25], 0, i1476, 'effectSpriteRenderer')
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'sharedMesh')
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'additionalVertexStreams')
  i1480.enabled = !!i1481[2]
  request.r(i1481[3], i1481[4], 0, i1480, 'sharedMaterial')
  var i1483 = i1481[5]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 2, i1482, '')
  }
  i1480.sharedMaterials = i1482
  i1480.receiveShadows = !!i1481[6]
  i1480.shadowCastingMode = i1481[7]
  i1480.sortingLayerID = i1481[8]
  i1480.sortingOrder = i1481[9]
  i1480.lightmapIndex = i1481[10]
  i1480.lightmapSceneIndex = i1481[11]
  i1480.lightmapScaleOffset = new pc.Vec4( i1481[12], i1481[13], i1481[14], i1481[15] )
  i1480.lightProbeUsage = i1481[16]
  i1480.reflectionProbeUsage = i1481[17]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.tagId = i1487[1]
  i1486.enabled = !!i1487[2]
  i1486.isStatic = !!i1487[3]
  i1486.layer = i1487[4]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1489 = data
  i1488.pivot = new pc.Vec2( i1489[0], i1489[1] )
  i1488.anchorMin = new pc.Vec2( i1489[2], i1489[3] )
  i1488.anchorMax = new pc.Vec2( i1489[4], i1489[5] )
  i1488.sizeDelta = new pc.Vec2( i1489[6], i1489[7] )
  i1488.anchoredPosition3D = new pc.Vec3( i1489[8], i1489[9], i1489[10] )
  i1488.rotation = new pc.Quat(i1489[11], i1489[12], i1489[13], i1489[14])
  i1488.scale = new pc.Vec3( i1489[15], i1489[16], i1489[17] )
  return i1488
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.TextMeshPro' )
  var i1491 = data
  i1490._SortingLayer = i1491[0]
  i1490._SortingLayerID = i1491[1]
  i1490._SortingOrder = i1491[2]
  i1490.m_hasFontAssetChanged = !!i1491[3]
  request.r(i1491[4], i1491[5], 0, i1490, 'm_renderer')
  i1490.m_maskType = i1491[6]
  i1490.m_text = i1491[7]
  i1490.m_isRightToLeft = !!i1491[8]
  request.r(i1491[9], i1491[10], 0, i1490, 'm_fontAsset')
  request.r(i1491[11], i1491[12], 0, i1490, 'm_sharedMaterial')
  var i1493 = i1491[13]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 2) {
  request.r(i1493[i + 0], i1493[i + 1], 2, i1492, '')
  }
  i1490.m_fontSharedMaterials = i1492
  request.r(i1491[14], i1491[15], 0, i1490, 'm_fontMaterial')
  var i1495 = i1491[16]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 2) {
  request.r(i1495[i + 0], i1495[i + 1], 2, i1494, '')
  }
  i1490.m_fontMaterials = i1494
  i1490.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1491[17], i1491[18], i1491[19], i1491[20])
  i1490.m_fontColor = new pc.Color(i1491[21], i1491[22], i1491[23], i1491[24])
  i1490.m_enableVertexGradient = !!i1491[25]
  i1490.m_colorMode = i1491[26]
  i1490.m_fontColorGradient = request.d('TMPro.VertexGradient', i1491[27], i1490.m_fontColorGradient)
  request.r(i1491[28], i1491[29], 0, i1490, 'm_fontColorGradientPreset')
  request.r(i1491[30], i1491[31], 0, i1490, 'm_spriteAsset')
  i1490.m_tintAllSprites = !!i1491[32]
  request.r(i1491[33], i1491[34], 0, i1490, 'm_StyleSheet')
  i1490.m_TextStyleHashCode = i1491[35]
  i1490.m_overrideHtmlColors = !!i1491[36]
  i1490.m_faceColor = UnityEngine.Color32.ConstructColor(i1491[37], i1491[38], i1491[39], i1491[40])
  i1490.m_fontSize = i1491[41]
  i1490.m_fontSizeBase = i1491[42]
  i1490.m_fontWeight = i1491[43]
  i1490.m_enableAutoSizing = !!i1491[44]
  i1490.m_fontSizeMin = i1491[45]
  i1490.m_fontSizeMax = i1491[46]
  i1490.m_fontStyle = i1491[47]
  i1490.m_HorizontalAlignment = i1491[48]
  i1490.m_VerticalAlignment = i1491[49]
  i1490.m_textAlignment = i1491[50]
  i1490.m_characterSpacing = i1491[51]
  i1490.m_wordSpacing = i1491[52]
  i1490.m_lineSpacing = i1491[53]
  i1490.m_lineSpacingMax = i1491[54]
  i1490.m_paragraphSpacing = i1491[55]
  i1490.m_charWidthMaxAdj = i1491[56]
  i1490.m_enableWordWrapping = !!i1491[57]
  i1490.m_wordWrappingRatios = i1491[58]
  i1490.m_overflowMode = i1491[59]
  request.r(i1491[60], i1491[61], 0, i1490, 'm_linkedTextComponent')
  request.r(i1491[62], i1491[63], 0, i1490, 'parentLinkedComponent')
  i1490.m_enableKerning = !!i1491[64]
  i1490.m_enableExtraPadding = !!i1491[65]
  i1490.checkPaddingRequired = !!i1491[66]
  i1490.m_isRichText = !!i1491[67]
  i1490.m_parseCtrlCharacters = !!i1491[68]
  i1490.m_isOrthographic = !!i1491[69]
  i1490.m_isCullingEnabled = !!i1491[70]
  i1490.m_horizontalMapping = i1491[71]
  i1490.m_verticalMapping = i1491[72]
  i1490.m_uvLineOffset = i1491[73]
  i1490.m_geometrySortingOrder = i1491[74]
  i1490.m_IsTextObjectScaleStatic = !!i1491[75]
  i1490.m_VertexBufferAutoSizeReduction = !!i1491[76]
  i1490.m_useMaxVisibleDescender = !!i1491[77]
  i1490.m_pageToDisplay = i1491[78]
  i1490.m_margin = new pc.Vec4( i1491[79], i1491[80], i1491[81], i1491[82] )
  i1490.m_isUsingLegacyAnimationComponent = !!i1491[83]
  i1490.m_isVolumetricText = !!i1491[84]
  request.r(i1491[85], i1491[86], 0, i1490, 'm_Material')
  i1490.m_Maskable = !!i1491[87]
  i1490.m_Color = new pc.Color(i1491[88], i1491[89], i1491[90], i1491[91])
  i1490.m_RaycastTarget = !!i1491[92]
  i1490.m_RaycastPadding = new pc.Vec4( i1491[93], i1491[94], i1491[95], i1491[96] )
  return i1490
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1496 = root || request.c( 'TMPro.VertexGradient' )
  var i1497 = data
  i1496.topLeft = new pc.Color(i1497[0], i1497[1], i1497[2], i1497[3])
  i1496.topRight = new pc.Color(i1497[4], i1497[5], i1497[6], i1497[7])
  i1496.bottomLeft = new pc.Color(i1497[8], i1497[9], i1497[10], i1497[11])
  i1496.bottomRight = new pc.Color(i1497[12], i1497[13], i1497[14], i1497[15])
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1499 = data
  i1498.enabled = !!i1499[0]
  request.r(i1499[1], i1499[2], 0, i1498, 'sharedMaterial')
  var i1501 = i1499[3]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 2, i1500, '')
  }
  i1498.sharedMaterials = i1500
  i1498.receiveShadows = !!i1499[4]
  i1498.shadowCastingMode = i1499[5]
  i1498.sortingLayerID = i1499[6]
  i1498.sortingOrder = i1499[7]
  i1498.lightmapIndex = i1499[8]
  i1498.lightmapSceneIndex = i1499[9]
  i1498.lightmapScaleOffset = new pc.Vec4( i1499[10], i1499[11], i1499[12], i1499[13] )
  i1498.lightProbeUsage = i1499[14]
  i1498.reflectionProbeUsage = i1499[15]
  i1498.color = new pc.Color(i1499[16], i1499[17], i1499[18], i1499[19])
  request.r(i1499[20], i1499[21], 0, i1498, 'sprite')
  i1498.flipX = !!i1499[22]
  i1498.flipY = !!i1499[23]
  i1498.drawMode = i1499[24]
  i1498.size = new pc.Vec2( i1499[25], i1499[26] )
  i1498.tileMode = i1499[27]
  i1498.adaptiveModeThreshold = i1499[28]
  i1498.maskInteraction = i1499[29]
  i1498.spriteSortPoint = i1499[30]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.halfPrecision = !!i1503[1]
  i1502.useUInt32IndexFormat = !!i1503[2]
  i1502.vertexCount = i1503[3]
  i1502.aabb = i1503[4]
  var i1505 = i1503[5]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( !!i1505[i + 0] );
  }
  i1502.streams = i1504
  i1502.vertices = i1503[6]
  var i1507 = i1503[7]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1507[i + 0]) );
  }
  i1502.subMeshes = i1506
  var i1509 = i1503[8]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 16) {
    i1508.push( new pc.Mat4().setData(i1509[i + 0], i1509[i + 1], i1509[i + 2], i1509[i + 3],  i1509[i + 4], i1509[i + 5], i1509[i + 6], i1509[i + 7],  i1509[i + 8], i1509[i + 9], i1509[i + 10], i1509[i + 11],  i1509[i + 12], i1509[i + 13], i1509[i + 14], i1509[i + 15]) );
  }
  i1502.bindposes = i1508
  var i1511 = i1503[9]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1511[i + 0]) );
  }
  i1502.blendShapes = i1510
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1517 = data
  i1516.triangles = i1517[0]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1523 = data
  i1522.name = i1523[0]
  var i1525 = i1523[1]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1525[i + 0]) );
  }
  i1522.frames = i1524
  return i1522
}

Deserializers["Card"] = function (request, data, root) {
  var i1526 = root || request.c( 'Card' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'frontRenderer')
  request.r(i1527[2], i1527[3], 0, i1526, 'backRenderer')
  request.r(i1527[4], i1527[5], 0, i1526, 'shadowHandRenderer')
  request.r(i1527[6], i1527[7], 0, i1526, 'shadowDeckRenderer')
  request.r(i1527[8], i1527[9], 0, i1526, 'shadowThrowRenderer')
  request.r(i1527[10], i1527[11], 0, i1526, 'shadowMeldingRenderer')
  request.r(i1527[12], i1527[13], 0, i1526, 'shadowOutline')
  request.r(i1527[14], i1527[15], 0, i1526, 'layOffOutline')
  request.r(i1527[16], i1527[17], 0, i1526, 'container')
  var i1529 = i1527[18]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 2, i1528, '')
  }
  i1526.sprites = i1528
  request.r(i1527[19], i1527[20], 0, i1526, 'highlightRenderer')
  var i1531 = i1527[21]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 4) {
    i1530.push( new pc.Color(i1531[i + 0], i1531[i + 1], i1531[i + 2], i1531[i + 3]) );
  }
  i1526.highlightColors = i1530
  i1526.blockedColor = new pc.Color(i1527[22], i1527[23], i1527[24], i1527[25])
  i1526.nonBlockedColor = new pc.Color(i1527[26], i1527[27], i1527[28], i1527[29])
  request.r(i1527[30], i1527[31], 0, i1526, 'boxCollider')
  var i1533 = i1527[32]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 4) {
    i1532.push( new pc.Color(i1533[i + 0], i1533[i + 1], i1533[i + 2], i1533[i + 3]) );
  }
  i1526.layOffColors = i1532
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.atlasId = i1539[1]
  i1538.mipmapCount = i1539[2]
  i1538.hdr = !!i1539[3]
  i1538.size = i1539[4]
  i1538.anisoLevel = i1539[5]
  i1538.filterMode = i1539[6]
  var i1541 = i1539[7]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 4) {
    i1540.push( UnityEngine.Rect.MinMaxRect(i1541[i + 0], i1541[i + 1], i1541[i + 2], i1541[i + 3]) );
  }
  i1538.rects = i1540
  i1538.wrapU = i1539[8]
  i1538.wrapV = i1539[9]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1545 = data
  i1544.name = i1545[0]
  i1544.index = i1545[1]
  i1544.startup = !!i1545[2]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1547 = data
  i1546.enabled = !!i1547[0]
  i1546.aspect = i1547[1]
  i1546.orthographic = !!i1547[2]
  i1546.orthographicSize = i1547[3]
  i1546.backgroundColor = new pc.Color(i1547[4], i1547[5], i1547[6], i1547[7])
  i1546.nearClipPlane = i1547[8]
  i1546.farClipPlane = i1547[9]
  i1546.fieldOfView = i1547[10]
  i1546.depth = i1547[11]
  i1546.clearFlags = i1547[12]
  i1546.cullingMask = i1547[13]
  i1546.rect = i1547[14]
  request.r(i1547[15], i1547[16], 0, i1546, 'targetTexture')
  i1546.usePhysicalProperties = !!i1547[17]
  i1546.focalLength = i1547[18]
  i1546.sensorSize = new pc.Vec2( i1547[19], i1547[20] )
  i1546.lensShift = new pc.Vec2( i1547[21], i1547[22] )
  i1546.gateFit = i1547[23]
  i1546.commandBufferCount = i1547[24]
  i1546.cameraType = i1547[25]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1549 = data
  i1548.enabled = !!i1549[0]
  i1548.planeDistance = i1549[1]
  i1548.referencePixelsPerUnit = i1549[2]
  i1548.isFallbackOverlay = !!i1549[3]
  i1548.renderMode = i1549[4]
  i1548.renderOrder = i1549[5]
  i1548.sortingLayerName = i1549[6]
  i1548.sortingOrder = i1549[7]
  i1548.scaleFactor = i1549[8]
  request.r(i1549[9], i1549[10], 0, i1548, 'worldCamera')
  i1548.overrideSorting = !!i1549[11]
  i1548.pixelPerfect = !!i1549[12]
  i1548.targetDisplay = i1549[13]
  i1548.overridePixelPerfect = !!i1549[14]
  return i1548
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1551 = data
  i1550.m_UiScaleMode = i1551[0]
  i1550.m_ReferencePixelsPerUnit = i1551[1]
  i1550.m_ScaleFactor = i1551[2]
  i1550.m_ReferenceResolution = new pc.Vec2( i1551[3], i1551[4] )
  i1550.m_ScreenMatchMode = i1551[5]
  i1550.m_MatchWidthOrHeight = i1551[6]
  i1550.m_PhysicalUnit = i1551[7]
  i1550.m_FallbackScreenDPI = i1551[8]
  i1550.m_DefaultSpriteDPI = i1551[9]
  i1550.m_DynamicPixelsPerUnit = i1551[10]
  i1550.m_PresetInfoIsWorld = !!i1551[11]
  return i1550
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1553 = data
  i1552.m_IgnoreReversedGraphics = !!i1553[0]
  i1552.m_BlockingObjects = i1553[1]
  i1552.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1553[2] )
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1555 = data
  i1554.cullTransparentMesh = !!i1555[0]
  return i1554
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.UI.Image' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'm_Sprite')
  i1556.m_Type = i1557[2]
  i1556.m_PreserveAspect = !!i1557[3]
  i1556.m_FillCenter = !!i1557[4]
  i1556.m_FillMethod = i1557[5]
  i1556.m_FillAmount = i1557[6]
  i1556.m_FillClockwise = !!i1557[7]
  i1556.m_FillOrigin = i1557[8]
  i1556.m_UseSpriteMesh = !!i1557[9]
  i1556.m_PixelsPerUnitMultiplier = i1557[10]
  request.r(i1557[11], i1557[12], 0, i1556, 'm_Material')
  i1556.m_Maskable = !!i1557[13]
  i1556.m_Color = new pc.Color(i1557[14], i1557[15], i1557[16], i1557[17])
  i1556.m_RaycastTarget = !!i1557[18]
  i1556.m_RaycastPadding = new pc.Vec4( i1557[19], i1557[20], i1557[21], i1557[22] )
  return i1556
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.UI.Button' )
  var i1559 = data
  i1558.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1559[0], i1558.m_OnClick)
  i1558.m_Navigation = request.d('UnityEngine.UI.Navigation', i1559[1], i1558.m_Navigation)
  i1558.m_Transition = i1559[2]
  i1558.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1559[3], i1558.m_Colors)
  i1558.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1559[4], i1558.m_SpriteState)
  i1558.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1559[5], i1558.m_AnimationTriggers)
  i1558.m_Interactable = !!i1559[6]
  request.r(i1559[7], i1559[8], 0, i1558, 'm_TargetGraphic')
  return i1558
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1561 = data
  i1560.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1561[0], i1560.m_PersistentCalls)
  return i1560
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1563 = data
  var i1565 = i1563[0]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('UnityEngine.Events.PersistentCall', i1565[i + 0]));
  }
  i1562.m_Calls = i1564
  return i1562
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'm_Target')
  i1568.m_TargetAssemblyTypeName = i1569[2]
  i1568.m_MethodName = i1569[3]
  i1568.m_Mode = i1569[4]
  i1568.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1569[5], i1568.m_Arguments)
  i1568.m_CallState = i1569[6]
  return i1568
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'm_ObjectArgument')
  i1570.m_ObjectArgumentAssemblyTypeName = i1571[2]
  i1570.m_IntArgument = i1571[3]
  i1570.m_FloatArgument = i1571[4]
  i1570.m_StringArgument = i1571[5]
  i1570.m_BoolArgument = !!i1571[6]
  return i1570
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1573 = data
  i1572.m_Mode = i1573[0]
  i1572.m_WrapAround = !!i1573[1]
  request.r(i1573[2], i1573[3], 0, i1572, 'm_SelectOnUp')
  request.r(i1573[4], i1573[5], 0, i1572, 'm_SelectOnDown')
  request.r(i1573[6], i1573[7], 0, i1572, 'm_SelectOnLeft')
  request.r(i1573[8], i1573[9], 0, i1572, 'm_SelectOnRight')
  return i1572
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1575 = data
  i1574.m_NormalColor = new pc.Color(i1575[0], i1575[1], i1575[2], i1575[3])
  i1574.m_HighlightedColor = new pc.Color(i1575[4], i1575[5], i1575[6], i1575[7])
  i1574.m_PressedColor = new pc.Color(i1575[8], i1575[9], i1575[10], i1575[11])
  i1574.m_SelectedColor = new pc.Color(i1575[12], i1575[13], i1575[14], i1575[15])
  i1574.m_DisabledColor = new pc.Color(i1575[16], i1575[17], i1575[18], i1575[19])
  i1574.m_ColorMultiplier = i1575[20]
  i1574.m_FadeDuration = i1575[21]
  return i1574
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'm_HighlightedSprite')
  request.r(i1577[2], i1577[3], 0, i1576, 'm_PressedSprite')
  request.r(i1577[4], i1577[5], 0, i1576, 'm_SelectedSprite')
  request.r(i1577[6], i1577[7], 0, i1576, 'm_DisabledSprite')
  return i1576
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1579 = data
  i1578.m_NormalTrigger = i1579[0]
  i1578.m_HighlightedTrigger = i1579[1]
  i1578.m_PressedTrigger = i1579[2]
  i1578.m_SelectedTrigger = i1579[3]
  i1578.m_DisabledTrigger = i1579[4]
  return i1578
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1580 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1581 = data
  i1580.m_hasFontAssetChanged = !!i1581[0]
  request.r(i1581[1], i1581[2], 0, i1580, 'm_baseMaterial')
  i1580.m_maskOffset = new pc.Vec4( i1581[3], i1581[4], i1581[5], i1581[6] )
  i1580.m_text = i1581[7]
  i1580.m_isRightToLeft = !!i1581[8]
  request.r(i1581[9], i1581[10], 0, i1580, 'm_fontAsset')
  request.r(i1581[11], i1581[12], 0, i1580, 'm_sharedMaterial')
  var i1583 = i1581[13]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 2, i1582, '')
  }
  i1580.m_fontSharedMaterials = i1582
  request.r(i1581[14], i1581[15], 0, i1580, 'm_fontMaterial')
  var i1585 = i1581[16]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 2) {
  request.r(i1585[i + 0], i1585[i + 1], 2, i1584, '')
  }
  i1580.m_fontMaterials = i1584
  i1580.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1581[17], i1581[18], i1581[19], i1581[20])
  i1580.m_fontColor = new pc.Color(i1581[21], i1581[22], i1581[23], i1581[24])
  i1580.m_enableVertexGradient = !!i1581[25]
  i1580.m_colorMode = i1581[26]
  i1580.m_fontColorGradient = request.d('TMPro.VertexGradient', i1581[27], i1580.m_fontColorGradient)
  request.r(i1581[28], i1581[29], 0, i1580, 'm_fontColorGradientPreset')
  request.r(i1581[30], i1581[31], 0, i1580, 'm_spriteAsset')
  i1580.m_tintAllSprites = !!i1581[32]
  request.r(i1581[33], i1581[34], 0, i1580, 'm_StyleSheet')
  i1580.m_TextStyleHashCode = i1581[35]
  i1580.m_overrideHtmlColors = !!i1581[36]
  i1580.m_faceColor = UnityEngine.Color32.ConstructColor(i1581[37], i1581[38], i1581[39], i1581[40])
  i1580.m_fontSize = i1581[41]
  i1580.m_fontSizeBase = i1581[42]
  i1580.m_fontWeight = i1581[43]
  i1580.m_enableAutoSizing = !!i1581[44]
  i1580.m_fontSizeMin = i1581[45]
  i1580.m_fontSizeMax = i1581[46]
  i1580.m_fontStyle = i1581[47]
  i1580.m_HorizontalAlignment = i1581[48]
  i1580.m_VerticalAlignment = i1581[49]
  i1580.m_textAlignment = i1581[50]
  i1580.m_characterSpacing = i1581[51]
  i1580.m_wordSpacing = i1581[52]
  i1580.m_lineSpacing = i1581[53]
  i1580.m_lineSpacingMax = i1581[54]
  i1580.m_paragraphSpacing = i1581[55]
  i1580.m_charWidthMaxAdj = i1581[56]
  i1580.m_enableWordWrapping = !!i1581[57]
  i1580.m_wordWrappingRatios = i1581[58]
  i1580.m_overflowMode = i1581[59]
  request.r(i1581[60], i1581[61], 0, i1580, 'm_linkedTextComponent')
  request.r(i1581[62], i1581[63], 0, i1580, 'parentLinkedComponent')
  i1580.m_enableKerning = !!i1581[64]
  i1580.m_enableExtraPadding = !!i1581[65]
  i1580.checkPaddingRequired = !!i1581[66]
  i1580.m_isRichText = !!i1581[67]
  i1580.m_parseCtrlCharacters = !!i1581[68]
  i1580.m_isOrthographic = !!i1581[69]
  i1580.m_isCullingEnabled = !!i1581[70]
  i1580.m_horizontalMapping = i1581[71]
  i1580.m_verticalMapping = i1581[72]
  i1580.m_uvLineOffset = i1581[73]
  i1580.m_geometrySortingOrder = i1581[74]
  i1580.m_IsTextObjectScaleStatic = !!i1581[75]
  i1580.m_VertexBufferAutoSizeReduction = !!i1581[76]
  i1580.m_useMaxVisibleDescender = !!i1581[77]
  i1580.m_pageToDisplay = i1581[78]
  i1580.m_margin = new pc.Vec4( i1581[79], i1581[80], i1581[81], i1581[82] )
  i1580.m_isUsingLegacyAnimationComponent = !!i1581[83]
  i1580.m_isVolumetricText = !!i1581[84]
  request.r(i1581[85], i1581[86], 0, i1580, 'm_Material')
  i1580.m_Maskable = !!i1581[87]
  i1580.m_Color = new pc.Color(i1581[88], i1581[89], i1581[90], i1581[91])
  i1580.m_RaycastTarget = !!i1581[92]
  i1580.m_RaycastPadding = new pc.Vec4( i1581[93], i1581[94], i1581[95], i1581[96] )
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.type = i1587[1]
  i1586.color = new pc.Color(i1587[2], i1587[3], i1587[4], i1587[5])
  i1586.cullingMask = i1587[6]
  i1586.intensity = i1587[7]
  i1586.range = i1587[8]
  i1586.spotAngle = i1587[9]
  i1586.shadows = i1587[10]
  i1586.shadowNormalBias = i1587[11]
  i1586.shadowBias = i1587[12]
  i1586.shadowStrength = i1587[13]
  i1586.shadowResolution = i1587[14]
  i1586.lightmapBakeType = i1587[15]
  i1586.renderMode = i1587[16]
  request.r(i1587[17], i1587[18], 0, i1586, 'cookie')
  i1586.cookieSize = i1587[19]
  return i1586
}

Deserializers["CardLayer"] = function (request, data, root) {
  var i1588 = root || request.c( 'CardLayer' )
  var i1589 = data
  i1588.myTurn = !!i1589[0]
  i1588.straightGin = i1589[1]
  i1588.discardedCards = i1589[2]
  i1588.handStartCards = i1589[3]
  i1588.deckCards = i1589[4]
  i1588.opponentThrowCardNo = i1589[5]
  i1588.opponentPlay = i1589[6]
  i1588.opponentWinConditionTargetPlayIndex = i1589[7]
  request.r(i1589[8], i1589[9], 0, i1588, 'cardPool')
  request.r(i1589[10], i1589[11], 0, i1588, 'handController')
  request.r(i1589[12], i1589[13], 0, i1588, 'deckController')
  request.r(i1589[14], i1589[15], 0, i1588, 'throwController')
  request.r(i1589[16], i1589[17], 0, i1588, 'dragController')
  request.r(i1589[18], i1589[19], 0, i1588, 'opponentController')
  request.r(i1589[20], i1589[21], 0, i1588, 'gameActionButton')
  i1588._opponentPlayCounter = i1589[22]
  i1588.pickDelay = i1589[23]
  i1588.throwDelay = i1589[24]
  i1588.cardsStartCount = i1589[25]
  return i1588
}

Deserializers["CardPool"] = function (request, data, root) {
  var i1590 = root || request.c( 'CardPool' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'cardPrefab')
  return i1590
}

Deserializers["HandController"] = function (request, data, root) {
  var i1592 = root || request.c( 'HandController' )
  var i1593 = data
  i1592.sortingOrderMultiplier = i1593[0]
  request.r(i1593[1], i1593[2], 0, i1592, 'slotPrefab')
  var i1595 = i1593[3]
  var i1594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1595.length; i += 2) {
  request.r(i1595[i + 0], i1595[i + 1], 1, i1594, '')
  }
  i1592.slotsPool = i1594
  i1592.duration = i1593[4]
  i1592.ease = i1593[5]
  return i1592
}

Deserializers["HandSlotArc"] = function (request, data, root) {
  var i1598 = root || request.c( 'HandSlotArc' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'handSettingsSo')
  return i1598
}

Deserializers["DragController"] = function (request, data, root) {
  var i1600 = root || request.c( 'DragController' )
  var i1601 = data
  i1600.lastPickedCardFromThrowZoneNo = i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'draggingCard')
  i1600.fullDisable = !!i1601[3]
  i1600.canFreeControl = !!i1601[4]
  i1600.canPickCardFromDeck = !!i1601[5]
  i1600.canPickCardFromThrow = !!i1601[6]
  i1600.canThrowCard = !!i1601[7]
  request.r(i1601[8], i1601[9], 0, i1600, 'gameCamera')
  i1600.planeMask = UnityEngine.LayerMask.FromIntegerValue( i1601[10] )
  i1600.cardMask = UnityEngine.LayerMask.FromIntegerValue( i1601[11] )
  request.r(i1601[12], i1601[13], 0, i1600, 'slot')
  request.r(i1601[14], i1601[15], 0, i1600, 'handEdge')
  return i1600
}

Deserializers["ThrowController"] = function (request, data, root) {
  var i1602 = root || request.c( 'ThrowController' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'slotPrefab')
  i1602.offset = new pc.Vec3( i1603[2], i1603[3], i1603[4] )
  i1602.duration = i1603[5]
  i1602.ease = i1603[6]
  i1602.sortingOrderMultiplier = i1603[7]
  var i1605 = i1603[8]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1605.length; i += 2) {
  request.r(i1605[i + 0], i1605[i + 1], 1, i1604, '')
  }
  i1602.slotPool = i1604
  return i1602
}

Deserializers["DeckController"] = function (request, data, root) {
  var i1606 = root || request.c( 'DeckController' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'slotPrefab')
  i1606.offset = new pc.Vec3( i1607[2], i1607[3], i1607[4] )
  i1606.sortingOrderMultiplier = i1607[5]
  var i1609 = i1607[6]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 1, i1608, '')
  }
  i1606.slotPool = i1608
  return i1606
}

Deserializers["OpponentController"] = function (request, data, root) {
  var i1610 = root || request.c( 'OpponentController' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'slotPrefab')
  i1610.duration = i1611[2]
  i1610.ease = i1611[3]
  i1610.sortingOrderMultiplier = i1611[4]
  var i1613 = i1611[5]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1613.length; i += 2) {
  request.r(i1613[i + 0], i1613[i + 1], 1, i1612, '')
  }
  i1610.slotPool = i1612
  return i1610
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, 'm_FirstSelected')
  i1614.m_sendNavigationEvents = !!i1615[2]
  i1614.m_DragThreshold = i1615[3]
  return i1614
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1617 = data
  i1616.m_HorizontalAxis = i1617[0]
  i1616.m_VerticalAxis = i1617[1]
  i1616.m_SubmitButton = i1617[2]
  i1616.m_CancelButton = i1617[3]
  i1616.m_InputActionsPerSecond = i1617[4]
  i1616.m_RepeatDelay = i1617[5]
  i1616.m_ForceModuleActive = !!i1617[6]
  i1616.m_SendPointerHoverToParent = !!i1617[7]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1619 = data
  i1618.ambientIntensity = i1619[0]
  i1618.reflectionIntensity = i1619[1]
  i1618.ambientMode = i1619[2]
  i1618.ambientLight = new pc.Color(i1619[3], i1619[4], i1619[5], i1619[6])
  i1618.ambientSkyColor = new pc.Color(i1619[7], i1619[8], i1619[9], i1619[10])
  i1618.ambientGroundColor = new pc.Color(i1619[11], i1619[12], i1619[13], i1619[14])
  i1618.ambientEquatorColor = new pc.Color(i1619[15], i1619[16], i1619[17], i1619[18])
  i1618.fogColor = new pc.Color(i1619[19], i1619[20], i1619[21], i1619[22])
  i1618.fogEndDistance = i1619[23]
  i1618.fogStartDistance = i1619[24]
  i1618.fogDensity = i1619[25]
  i1618.fog = !!i1619[26]
  request.r(i1619[27], i1619[28], 0, i1618, 'skybox')
  i1618.fogMode = i1619[29]
  var i1621 = i1619[30]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1621[i + 0]) );
  }
  i1618.lightmaps = i1620
  i1618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1619[31], i1618.lightProbes)
  i1618.lightmapsMode = i1619[32]
  i1618.mixedBakeMode = i1619[33]
  i1618.environmentLightingMode = i1619[34]
  i1618.ambientProbe = new pc.SphericalHarmonicsL2(i1619[35])
  i1618.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1619[36])
  i1618.useReferenceAmbientProbe = !!i1619[37]
  request.r(i1619[38], i1619[39], 0, i1618, 'customReflection')
  request.r(i1619[40], i1619[41], 0, i1618, 'defaultReflection')
  i1618.defaultReflectionMode = i1619[42]
  i1618.defaultReflectionResolution = i1619[43]
  i1618.sunLightObjectId = i1619[44]
  i1618.pixelLightCount = i1619[45]
  i1618.defaultReflectionHDR = !!i1619[46]
  i1618.hasLightDataAsset = !!i1619[47]
  i1618.hasManualGenerate = !!i1619[48]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'lightmapColor')
  request.r(i1625[2], i1625[3], 0, i1624, 'lightmapDirection')
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1626 = root || new UnityEngine.LightProbes()
  var i1627 = data
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1635 = data
  var i1637 = i1635[0]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1637[i + 0]));
  }
  i1634.ShaderCompilationErrors = i1636
  i1634.name = i1635[1]
  i1634.guid = i1635[2]
  var i1639 = i1635[3]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( i1639[i + 0] );
  }
  i1634.shaderDefinedKeywords = i1638
  var i1641 = i1635[4]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1641[i + 0]) );
  }
  i1634.passes = i1640
  var i1643 = i1635[5]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1643[i + 0]) );
  }
  i1634.usePasses = i1642
  var i1645 = i1635[6]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1645[i + 0]) );
  }
  i1634.defaultParameterValues = i1644
  request.r(i1635[7], i1635[8], 0, i1634, 'unityFallbackShader')
  i1634.readDepth = !!i1635[9]
  i1634.isCreatedByShaderGraph = !!i1635[10]
  i1634.compiled = !!i1635[11]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1649 = data
  i1648.shaderName = i1649[0]
  i1648.errorMessage = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1654 = root || new pc.UnityShaderPass()
  var i1655 = data
  i1654.id = i1655[0]
  i1654.subShaderIndex = i1655[1]
  i1654.name = i1655[2]
  i1654.passType = i1655[3]
  i1654.grabPassTextureName = i1655[4]
  i1654.usePass = !!i1655[5]
  i1654.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[6], i1654.zTest)
  i1654.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[7], i1654.zWrite)
  i1654.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[8], i1654.culling)
  i1654.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1655[9], i1654.blending)
  i1654.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1655[10], i1654.alphaBlending)
  i1654.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[11], i1654.colorWriteMask)
  i1654.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[12], i1654.offsetUnits)
  i1654.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[13], i1654.offsetFactor)
  i1654.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[14], i1654.stencilRef)
  i1654.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[15], i1654.stencilReadMask)
  i1654.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1655[16], i1654.stencilWriteMask)
  i1654.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1655[17], i1654.stencilOp)
  i1654.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1655[18], i1654.stencilOpFront)
  i1654.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1655[19], i1654.stencilOpBack)
  var i1657 = i1655[20]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1657[i + 0]) );
  }
  i1654.tags = i1656
  var i1659 = i1655[21]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( i1659[i + 0] );
  }
  i1654.passDefinedKeywords = i1658
  var i1661 = i1655[22]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1661[i + 0]) );
  }
  i1654.passDefinedKeywordGroups = i1660
  var i1663 = i1655[23]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1663[i + 0]) );
  }
  i1654.variants = i1662
  var i1665 = i1655[24]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1665[i + 0]) );
  }
  i1654.excludedVariants = i1664
  i1654.hasDepthReader = !!i1655[25]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1667 = data
  i1666.val = i1667[0]
  i1666.name = i1667[1]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1669 = data
  i1668.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[0], i1668.src)
  i1668.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[1], i1668.dst)
  i1668.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[2], i1668.op)
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1671 = data
  i1670.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[0], i1670.pass)
  i1670.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[1], i1670.fail)
  i1670.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[2], i1670.zFail)
  i1670.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[3], i1670.comp)
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.value = i1675[1]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1679 = data
  var i1681 = i1679[0]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( i1681[i + 0] );
  }
  i1678.keywords = i1680
  i1678.hasDiscard = !!i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1685 = data
  i1684.passId = i1685[0]
  i1684.subShaderIndex = i1685[1]
  var i1687 = i1685[2]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( i1687[i + 0] );
  }
  i1684.keywords = i1686
  i1684.vertexProgram = i1685[3]
  i1684.fragmentProgram = i1685[4]
  i1684.exportedForWebGl2 = !!i1685[5]
  i1684.readDepth = !!i1685[6]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'shader')
  i1690.pass = i1691[2]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.type = i1695[1]
  i1694.value = new pc.Vec4( i1695[2], i1695[3], i1695[4], i1695[5] )
  i1694.textureValue = i1695[6]
  i1694.shaderPropertyFlag = i1695[7]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1697 = data
  i1696.name = i1697[0]
  request.r(i1697[1], i1697[2], 0, i1696, 'texture')
  i1696.aabb = i1697[3]
  i1696.vertices = i1697[4]
  i1696.triangles = i1697[5]
  i1696.textureRect = UnityEngine.Rect.MinMaxRect(i1697[6], i1697[7], i1697[8], i1697[9])
  i1696.packedRect = UnityEngine.Rect.MinMaxRect(i1697[10], i1697[11], i1697[12], i1697[13])
  i1696.border = new pc.Vec4( i1697[14], i1697[15], i1697[16], i1697[17] )
  i1696.transparency = i1697[18]
  i1696.bounds = i1697[19]
  i1696.pixelsPerUnit = i1697[20]
  i1696.textureWidth = i1697[21]
  i1696.textureHeight = i1697[22]
  i1696.nativeSize = new pc.Vec2( i1697[23], i1697[24] )
  i1696.pivot = new pc.Vec2( i1697[25], i1697[26] )
  i1696.textureRectOffset = new pc.Vec2( i1697[27], i1697[28] )
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.ascent = i1699[1]
  i1698.originalLineHeight = i1699[2]
  i1698.fontSize = i1699[3]
  var i1701 = i1699[4]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1701[i + 0]) );
  }
  i1698.characterInfo = i1700
  request.r(i1699[5], i1699[6], 0, i1698, 'texture')
  i1698.originalFontSize = i1699[7]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1705 = data
  i1704.index = i1705[0]
  i1704.advance = i1705[1]
  i1704.bearing = i1705[2]
  i1704.glyphWidth = i1705[3]
  i1704.glyphHeight = i1705[4]
  i1704.minX = i1705[5]
  i1704.maxX = i1705[6]
  i1704.minY = i1705[7]
  i1704.maxY = i1705[8]
  i1704.uvBottomLeftX = i1705[9]
  i1704.uvBottomLeftY = i1705[10]
  i1704.uvBottomRightX = i1705[11]
  i1704.uvBottomRightY = i1705[12]
  i1704.uvTopLeftX = i1705[13]
  i1704.uvTopLeftY = i1705[14]
  i1704.uvTopRightX = i1705[15]
  i1704.uvTopRightY = i1705[16]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.bytes64 = i1707[1]
  i1706.data = i1707[2]
  return i1706
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1709 = data
  i1708.hashCode = i1709[0]
  request.r(i1709[1], i1709[2], 0, i1708, 'material')
  i1708.materialHashCode = i1709[3]
  request.r(i1709[4], i1709[5], 0, i1708, 'atlas')
  i1708.normalStyle = i1709[6]
  i1708.normalSpacingOffset = i1709[7]
  i1708.boldStyle = i1709[8]
  i1708.boldSpacing = i1709[9]
  i1708.italicStyle = i1709[10]
  i1708.tabSize = i1709[11]
  i1708.m_Version = i1709[12]
  i1708.m_SourceFontFileGUID = i1709[13]
  request.r(i1709[14], i1709[15], 0, i1708, 'm_SourceFontFile_EditorRef')
  request.r(i1709[16], i1709[17], 0, i1708, 'm_SourceFontFile')
  i1708.m_AtlasPopulationMode = i1709[18]
  i1708.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1709[19], i1708.m_FaceInfo)
  var i1711 = i1709[20]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.add(request.d('UnityEngine.TextCore.Glyph', i1711[i + 0]));
  }
  i1708.m_GlyphTable = i1710
  var i1713 = i1709[21]
  var i1712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.add(request.d('TMPro.TMP_Character', i1713[i + 0]));
  }
  i1708.m_CharacterTable = i1712
  var i1715 = i1709[22]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1708.m_AtlasTextures = i1714
  i1708.m_AtlasTextureIndex = i1709[23]
  i1708.m_IsMultiAtlasTexturesEnabled = !!i1709[24]
  i1708.m_ClearDynamicDataOnBuild = !!i1709[25]
  var i1717 = i1709[26]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('UnityEngine.TextCore.GlyphRect', i1717[i + 0]));
  }
  i1708.m_UsedGlyphRects = i1716
  var i1719 = i1709[27]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.add(request.d('UnityEngine.TextCore.GlyphRect', i1719[i + 0]));
  }
  i1708.m_FreeGlyphRects = i1718
  i1708.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1709[28], i1708.m_fontInfo)
  i1708.m_AtlasWidth = i1709[29]
  i1708.m_AtlasHeight = i1709[30]
  i1708.m_AtlasPadding = i1709[31]
  i1708.m_AtlasRenderMode = i1709[32]
  var i1721 = i1709[33]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.add(request.d('TMPro.TMP_Glyph', i1721[i + 0]));
  }
  i1708.m_glyphInfoList = i1720
  i1708.m_KerningTable = request.d('TMPro.KerningTable', i1709[34], i1708.m_KerningTable)
  i1708.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1709[35], i1708.m_FontFeatureTable)
  var i1723 = i1709[36]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 1, i1722, '')
  }
  i1708.fallbackFontAssets = i1722
  var i1725 = i1709[37]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 1, i1724, '')
  }
  i1708.m_FallbackFontAssetTable = i1724
  i1708.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1709[38], i1708.m_CreationSettings)
  var i1727 = i1709[39]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('TMPro.TMP_FontWeightPair', i1727[i + 0]) );
  }
  i1708.m_FontWeightTable = i1726
  var i1729 = i1709[40]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('TMPro.TMP_FontWeightPair', i1729[i + 0]) );
  }
  i1708.fontWeights = i1728
  return i1708
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1731 = data
  i1730.m_FaceIndex = i1731[0]
  i1730.m_FamilyName = i1731[1]
  i1730.m_StyleName = i1731[2]
  i1730.m_PointSize = i1731[3]
  i1730.m_Scale = i1731[4]
  i1730.m_UnitsPerEM = i1731[5]
  i1730.m_LineHeight = i1731[6]
  i1730.m_AscentLine = i1731[7]
  i1730.m_CapLine = i1731[8]
  i1730.m_MeanLine = i1731[9]
  i1730.m_Baseline = i1731[10]
  i1730.m_DescentLine = i1731[11]
  i1730.m_SuperscriptOffset = i1731[12]
  i1730.m_SuperscriptSize = i1731[13]
  i1730.m_SubscriptOffset = i1731[14]
  i1730.m_SubscriptSize = i1731[15]
  i1730.m_UnderlineOffset = i1731[16]
  i1730.m_UnderlineThickness = i1731[17]
  i1730.m_StrikethroughOffset = i1731[18]
  i1730.m_StrikethroughThickness = i1731[19]
  i1730.m_TabWidth = i1731[20]
  return i1730
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1735 = data
  i1734.m_Index = i1735[0]
  i1734.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1735[1], i1734.m_Metrics)
  i1734.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1735[2], i1734.m_GlyphRect)
  i1734.m_Scale = i1735[3]
  i1734.m_AtlasIndex = i1735[4]
  i1734.m_ClassDefinitionType = i1735[5]
  return i1734
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1737 = data
  i1736.m_Width = i1737[0]
  i1736.m_Height = i1737[1]
  i1736.m_HorizontalBearingX = i1737[2]
  i1736.m_HorizontalBearingY = i1737[3]
  i1736.m_HorizontalAdvance = i1737[4]
  return i1736
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1739 = data
  i1738.m_X = i1739[0]
  i1738.m_Y = i1739[1]
  i1738.m_Width = i1739[2]
  i1738.m_Height = i1739[3]
  return i1738
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.TMP_Character' )
  var i1743 = data
  i1742.m_ElementType = i1743[0]
  i1742.m_Unicode = i1743[1]
  i1742.m_GlyphIndex = i1743[2]
  i1742.m_Scale = i1743[3]
  return i1742
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1749 = data
  i1748.Name = i1749[0]
  i1748.PointSize = i1749[1]
  i1748.Scale = i1749[2]
  i1748.CharacterCount = i1749[3]
  i1748.LineHeight = i1749[4]
  i1748.Baseline = i1749[5]
  i1748.Ascender = i1749[6]
  i1748.CapHeight = i1749[7]
  i1748.Descender = i1749[8]
  i1748.CenterLine = i1749[9]
  i1748.SuperscriptOffset = i1749[10]
  i1748.SubscriptOffset = i1749[11]
  i1748.SubSize = i1749[12]
  i1748.Underline = i1749[13]
  i1748.UnderlineThickness = i1749[14]
  i1748.strikethrough = i1749[15]
  i1748.strikethroughThickness = i1749[16]
  i1748.TabWidth = i1749[17]
  i1748.Padding = i1749[18]
  i1748.AtlasWidth = i1749[19]
  i1748.AtlasHeight = i1749[20]
  return i1748
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1753 = data
  i1752.id = i1753[0]
  i1752.x = i1753[1]
  i1752.y = i1753[2]
  i1752.width = i1753[3]
  i1752.height = i1753[4]
  i1752.xOffset = i1753[5]
  i1752.yOffset = i1753[6]
  i1752.xAdvance = i1753[7]
  i1752.scale = i1753[8]
  return i1752
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.KerningTable' )
  var i1755 = data
  var i1757 = i1755[0]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('TMPro.KerningPair', i1757[i + 0]));
  }
  i1754.kerningPairs = i1756
  return i1754
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1760 = root || request.c( 'TMPro.KerningPair' )
  var i1761 = data
  i1760.xOffset = i1761[0]
  i1760.m_FirstGlyph = i1761[1]
  i1760.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1761[2], i1760.m_FirstGlyphAdjustments)
  i1760.m_SecondGlyph = i1761[3]
  i1760.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1761[4], i1760.m_SecondGlyphAdjustments)
  i1760.m_IgnoreSpacingAdjustments = !!i1761[5]
  return i1760
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1765[i + 0]));
  }
  i1762.m_GlyphPairAdjustmentRecords = i1764
  return i1762
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1769 = data
  i1768.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1769[0], i1768.m_FirstAdjustmentRecord)
  i1768.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1769[1], i1768.m_SecondAdjustmentRecord)
  i1768.m_FeatureLookupFlags = i1769[2]
  return i1768
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1771 = data
  i1770.m_GlyphIndex = i1771[0]
  i1770.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1771[1], i1770.m_GlyphValueRecord)
  return i1770
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1773 = data
  i1772.m_XPlacement = i1773[0]
  i1772.m_YPlacement = i1773[1]
  i1772.m_XAdvance = i1773[2]
  i1772.m_YAdvance = i1773[3]
  return i1772
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1777 = data
  i1776.sourceFontFileName = i1777[0]
  i1776.sourceFontFileGUID = i1777[1]
  i1776.pointSizeSamplingMode = i1777[2]
  i1776.pointSize = i1777[3]
  i1776.padding = i1777[4]
  i1776.packingMode = i1777[5]
  i1776.atlasWidth = i1777[6]
  i1776.atlasHeight = i1777[7]
  i1776.characterSetSelectionMode = i1777[8]
  i1776.characterSequence = i1777[9]
  i1776.referencedFontAssetGUID = i1777[10]
  i1776.referencedTextAssetGUID = i1777[11]
  i1776.fontStyle = i1777[12]
  i1776.fontStyleModifier = i1777[13]
  i1776.renderMode = i1777[14]
  i1776.includeFontFeatures = !!i1777[15]
  return i1776
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1780 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'regularTypeface')
  request.r(i1781[2], i1781[3], 0, i1780, 'italicTypeface')
  return i1780
}

Deserializers["HandSettingsSO"] = function (request, data, root) {
  var i1782 = root || request.c( 'HandSettingsSO' )
  var i1783 = data
  i1782.handHeight = i1783[0]
  i1782.handWidth = i1783[1]
  i1782.maxCardAngle = i1783[2]
  i1782.yPerCard = i1783[3]
  i1782.zDistance = i1783[4]
  i1782.handY = i1783[5]
  i1782.handZ = i1783[6]
  return i1782
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1784 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1785 = data
  i1784.useSafeMode = !!i1785[0]
  i1784.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1785[1], i1784.safeModeOptions)
  i1784.timeScale = i1785[2]
  i1784.unscaledTimeScale = i1785[3]
  i1784.useSmoothDeltaTime = !!i1785[4]
  i1784.maxSmoothUnscaledTime = i1785[5]
  i1784.rewindCallbackMode = i1785[6]
  i1784.showUnityEditorReport = !!i1785[7]
  i1784.logBehaviour = i1785[8]
  i1784.drawGizmos = !!i1785[9]
  i1784.defaultRecyclable = !!i1785[10]
  i1784.defaultAutoPlay = i1785[11]
  i1784.defaultUpdateType = i1785[12]
  i1784.defaultTimeScaleIndependent = !!i1785[13]
  i1784.defaultEaseType = i1785[14]
  i1784.defaultEaseOvershootOrAmplitude = i1785[15]
  i1784.defaultEasePeriod = i1785[16]
  i1784.defaultAutoKill = !!i1785[17]
  i1784.defaultLoopType = i1785[18]
  i1784.debugMode = !!i1785[19]
  i1784.debugStoreTargetId = !!i1785[20]
  i1784.showPreviewPanel = !!i1785[21]
  i1784.storeSettingsLocation = i1785[22]
  i1784.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1785[23], i1784.modules)
  i1784.createASMDEF = !!i1785[24]
  i1784.showPlayingTweens = !!i1785[25]
  i1784.showPausedTweens = !!i1785[26]
  return i1784
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1786 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1787 = data
  i1786.logBehaviour = i1787[0]
  i1786.nestedTweenFailureBehaviour = i1787[1]
  return i1786
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1788 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1789 = data
  i1788.showPanel = !!i1789[0]
  i1788.audioEnabled = !!i1789[1]
  i1788.physicsEnabled = !!i1789[2]
  i1788.physics2DEnabled = !!i1789[3]
  i1788.spriteEnabled = !!i1789[4]
  i1788.uiEnabled = !!i1789[5]
  i1788.textMeshProEnabled = !!i1789[6]
  i1788.tk2DEnabled = !!i1789[7]
  i1788.deAudioEnabled = !!i1789[8]
  i1788.deUnityExtendedEnabled = !!i1789[9]
  i1788.epoOutlineEnabled = !!i1789[10]
  return i1788
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_Settings' )
  var i1791 = data
  i1790.m_enableWordWrapping = !!i1791[0]
  i1790.m_enableKerning = !!i1791[1]
  i1790.m_enableExtraPadding = !!i1791[2]
  i1790.m_enableTintAllSprites = !!i1791[3]
  i1790.m_enableParseEscapeCharacters = !!i1791[4]
  i1790.m_EnableRaycastTarget = !!i1791[5]
  i1790.m_GetFontFeaturesAtRuntime = !!i1791[6]
  i1790.m_missingGlyphCharacter = i1791[7]
  i1790.m_warningsDisabled = !!i1791[8]
  request.r(i1791[9], i1791[10], 0, i1790, 'm_defaultFontAsset')
  i1790.m_defaultFontAssetPath = i1791[11]
  i1790.m_defaultFontSize = i1791[12]
  i1790.m_defaultAutoSizeMinRatio = i1791[13]
  i1790.m_defaultAutoSizeMaxRatio = i1791[14]
  i1790.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1791[15], i1791[16] )
  i1790.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1791[17], i1791[18] )
  i1790.m_autoSizeTextContainer = !!i1791[19]
  i1790.m_IsTextObjectScaleStatic = !!i1791[20]
  var i1793 = i1791[21]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 1, i1792, '')
  }
  i1790.m_fallbackFontAssets = i1792
  i1790.m_matchMaterialPreset = !!i1791[22]
  request.r(i1791[23], i1791[24], 0, i1790, 'm_defaultSpriteAsset')
  i1790.m_defaultSpriteAssetPath = i1791[25]
  i1790.m_enableEmojiSupport = !!i1791[26]
  i1790.m_MissingCharacterSpriteUnicode = i1791[27]
  i1790.m_defaultColorGradientPresetsPath = i1791[28]
  request.r(i1791[29], i1791[30], 0, i1790, 'm_defaultStyleSheet')
  i1790.m_StyleSheetsResourcePath = i1791[31]
  request.r(i1791[32], i1791[33], 0, i1790, 'm_leadingCharacters')
  request.r(i1791[34], i1791[35], 0, i1790, 'm_followingCharacters')
  i1790.m_UseModernHangulLineBreakingRules = !!i1791[36]
  return i1790
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1794 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1795 = data
  i1794.hashCode = i1795[0]
  request.r(i1795[1], i1795[2], 0, i1794, 'material')
  i1794.materialHashCode = i1795[3]
  request.r(i1795[4], i1795[5], 0, i1794, 'spriteSheet')
  var i1797 = i1795[6]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('TMPro.TMP_Sprite', i1797[i + 0]));
  }
  i1794.spriteInfoList = i1796
  var i1799 = i1795[7]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1799.length; i += 2) {
  request.r(i1799[i + 0], i1799[i + 1], 1, i1798, '')
  }
  i1794.fallbackSpriteAssets = i1798
  i1794.m_Version = i1795[8]
  i1794.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1795[9], i1794.m_FaceInfo)
  var i1801 = i1795[10]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.add(request.d('TMPro.TMP_SpriteCharacter', i1801[i + 0]));
  }
  i1794.m_SpriteCharacterTable = i1800
  var i1803 = i1795[11]
  var i1802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.add(request.d('TMPro.TMP_SpriteGlyph', i1803[i + 0]));
  }
  i1794.m_SpriteGlyphTable = i1802
  return i1794
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.hashCode = i1807[1]
  i1806.unicode = i1807[2]
  i1806.pivot = new pc.Vec2( i1807[3], i1807[4] )
  request.r(i1807[5], i1807[6], 0, i1806, 'sprite')
  i1806.id = i1807[7]
  i1806.x = i1807[8]
  i1806.y = i1807[9]
  i1806.width = i1807[10]
  i1806.height = i1807[11]
  i1806.xOffset = i1807[12]
  i1806.yOffset = i1807[13]
  i1806.xAdvance = i1807[14]
  i1806.scale = i1807[15]
  return i1806
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1812 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1813 = data
  i1812.m_Name = i1813[0]
  i1812.m_HashCode = i1813[1]
  i1812.m_ElementType = i1813[2]
  i1812.m_Unicode = i1813[3]
  i1812.m_GlyphIndex = i1813[4]
  i1812.m_Scale = i1813[5]
  return i1812
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'sprite')
  i1816.m_Index = i1817[2]
  i1816.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1817[3], i1816.m_Metrics)
  i1816.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1817[4], i1816.m_GlyphRect)
  i1816.m_Scale = i1817[5]
  i1816.m_AtlasIndex = i1817[6]
  i1816.m_ClassDefinitionType = i1817[7]
  return i1816
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1819 = data
  var i1821 = i1819[0]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.add(request.d('TMPro.TMP_Style', i1821[i + 0]));
  }
  i1818.m_StyleList = i1820
  return i1818
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.TMP_Style' )
  var i1825 = data
  i1824.m_Name = i1825[0]
  i1824.m_HashCode = i1825[1]
  i1824.m_OpeningDefinition = i1825[2]
  i1824.m_ClosingDefinition = i1825[3]
  i1824.m_OpeningTagArray = i1825[4]
  i1824.m_ClosingTagArray = i1825[5]
  i1824.m_OpeningTagUnicodeArray = i1825[6]
  i1824.m_ClosingTagUnicodeArray = i1825[7]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1829[i + 0]) );
  }
  i1826.files = i1828
  i1826.componentToPrefabIds = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1833 = data
  i1832.path = i1833[0]
  request.r(i1833[1], i1833[2], 0, i1832, 'unityObject')
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1835 = data
  var i1837 = i1835[0]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1837[i + 0]) );
  }
  i1834.scriptsExecutionOrder = i1836
  var i1839 = i1835[1]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1839[i + 0]) );
  }
  i1834.sortingLayers = i1838
  var i1841 = i1835[2]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1841[i + 0]) );
  }
  i1834.cullingLayers = i1840
  i1834.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1835[3], i1834.timeSettings)
  i1834.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1835[4], i1834.physicsSettings)
  i1834.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1835[5], i1834.physics2DSettings)
  i1834.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1835[6], i1834.qualitySettings)
  i1834.enableRealtimeShadows = !!i1835[7]
  i1834.enableAutoInstancing = !!i1835[8]
  i1834.enableDynamicBatching = !!i1835[9]
  i1834.lightmapEncodingQuality = i1835[10]
  i1834.desiredColorSpace = i1835[11]
  var i1843 = i1835[12]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( i1843[i + 0] );
  }
  i1834.allTags = i1842
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.value = i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1851 = data
  i1850.id = i1851[0]
  i1850.name = i1851[1]
  i1850.value = i1851[2]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1855 = data
  i1854.id = i1855[0]
  i1854.name = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1857 = data
  i1856.fixedDeltaTime = i1857[0]
  i1856.maximumDeltaTime = i1857[1]
  i1856.timeScale = i1857[2]
  i1856.maximumParticleTimestep = i1857[3]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1859 = data
  i1858.gravity = new pc.Vec3( i1859[0], i1859[1], i1859[2] )
  i1858.defaultSolverIterations = i1859[3]
  i1858.bounceThreshold = i1859[4]
  i1858.autoSyncTransforms = !!i1859[5]
  i1858.autoSimulation = !!i1859[6]
  var i1861 = i1859[7]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1861[i + 0]) );
  }
  i1858.collisionMatrix = i1860
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.layerId = i1865[1]
  i1864.otherLayerId = i1865[2]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'material')
  i1866.gravity = new pc.Vec2( i1867[2], i1867[3] )
  i1866.positionIterations = i1867[4]
  i1866.velocityIterations = i1867[5]
  i1866.velocityThreshold = i1867[6]
  i1866.maxLinearCorrection = i1867[7]
  i1866.maxAngularCorrection = i1867[8]
  i1866.maxTranslationSpeed = i1867[9]
  i1866.maxRotationSpeed = i1867[10]
  i1866.baumgarteScale = i1867[11]
  i1866.baumgarteTOIScale = i1867[12]
  i1866.timeToSleep = i1867[13]
  i1866.linearSleepTolerance = i1867[14]
  i1866.angularSleepTolerance = i1867[15]
  i1866.defaultContactOffset = i1867[16]
  i1866.autoSimulation = !!i1867[17]
  i1866.queriesHitTriggers = !!i1867[18]
  i1866.queriesStartInColliders = !!i1867[19]
  i1866.callbacksOnDisable = !!i1867[20]
  i1866.reuseCollisionCallbacks = !!i1867[21]
  i1866.autoSyncTransforms = !!i1867[22]
  var i1869 = i1867[23]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1869[i + 0]) );
  }
  i1866.collisionMatrix = i1868
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1873 = data
  i1872.enabled = !!i1873[0]
  i1872.layerId = i1873[1]
  i1872.otherLayerId = i1873[2]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1877[i + 0]) );
  }
  i1874.qualityLevels = i1876
  var i1879 = i1875[1]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1874.names = i1878
  i1874.shadows = i1875[2]
  i1874.anisotropicFiltering = i1875[3]
  i1874.antiAliasing = i1875[4]
  i1874.lodBias = i1875[5]
  i1874.shadowCascades = i1875[6]
  i1874.shadowDistance = i1875[7]
  i1874.shadowmaskMode = i1875[8]
  i1874.shadowProjection = i1875[9]
  i1874.shadowResolution = i1875[10]
  i1874.softParticles = !!i1875[11]
  i1874.softVegetation = !!i1875[12]
  i1874.activeColorSpace = i1875[13]
  i1874.desiredColorSpace = i1875[14]
  i1874.masterTextureLimit = i1875[15]
  i1874.maxQueuedFrames = i1875[16]
  i1874.particleRaycastBudget = i1875[17]
  i1874.pixelLightCount = i1875[18]
  i1874.realtimeReflectionProbes = !!i1875[19]
  i1874.shadowCascade2Split = i1875[20]
  i1874.shadowCascade4Split = new pc.Vec3( i1875[21], i1875[22], i1875[23] )
  i1874.streamingMipmapsActive = !!i1875[24]
  i1874.vSyncCount = i1875[25]
  i1874.asyncUploadBufferSize = i1875[26]
  i1874.asyncUploadTimeSlice = i1875[27]
  i1874.billboardsFaceCameraPosition = !!i1875[28]
  i1874.shadowNearPlaneOffset = i1875[29]
  i1874.streamingMipmapsMemoryBudget = i1875[30]
  i1874.maximumLODLevel = i1875[31]
  i1874.streamingMipmapsAddAllCameras = !!i1875[32]
  i1874.streamingMipmapsMaxLevelReduction = i1875[33]
  i1874.streamingMipmapsRenderersPerFrame = i1875[34]
  i1874.resolutionScalingFixedDPIFactor = i1875[35]
  i1874.streamingMipmapsMaxFileIORequests = i1875[36]
  i1874.currentQualityLevel = i1875[37]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1885 = data
  i1884.weight = i1885[0]
  i1884.vertices = i1885[1]
  i1884.normals = i1885[2]
  i1884.tangents = i1885[3]
  return i1884
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1886 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1887 = data
  i1886.xPlacement = i1887[0]
  i1886.yPlacement = i1887[1]
  i1886.xAdvance = i1887[2]
  i1886.yAdvance = i1887[3]
  return i1886
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

Deserializers.buildID = "d8bbe71d-1c63-410a-8cac-c6256dc06ef5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

