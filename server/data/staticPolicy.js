var jObject = [{
  "policy_table": {
    "module_config": {
      "preloaded_pt": true,
      "exchange_after_x_ignition_cycles": 100,
      "exchange_after_x_kilometers": 1800,
      "exchange_after_x_days": 20,
      "timeout_after_x_seconds": 60,
      "seconds_between_retries": [
        1,
        5,
        25,
        125,
        625
      ],
      "endpoints": {
        "0x07": {
          "default": ["http://policies.telematics.ford.com/api/policies"]
         },
         "0x04": {
           "default": ["http://ivsu.software.ford.com/api/getsoftwareupdates"]
         },
         "queryAppsUrl": {
           "default": ["http://sdl.shaid.server"]
         },
         "lock_screen_icon_url": {
           "default": ["http://i.imgur.com/QwZ9uKG.png"]
         }
       },
       "notifications_per_minute_by_priority": {
        "EMERGENCY": 60,
        "NAVIGATION": 15,
        "VOICECOM": 20,
        "COMMUNICATION": 6,
        "NORMAL": 4,
        "NONE": 0
      }
    },
    "functional_groupings": {
      "Base-4": {
        "rpcs": {
          "AddCommand": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "AddSubMenu": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "Alert": {
            "hmi_levels": [
              "FULL",
              "LIMITED"
            ]
          },
          "ChangeRegistration": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "CreateInteractionChoiceSet": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "DeleteCommand": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "DeleteFile": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "DeleteInteractionChoiceSet": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "DeleteSubMenu": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "EncodedSyncPData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "EndAudioPassThru": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "GenericResponse": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "ListFiles": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnAppInterfaceUnregistered": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnAudioPassThru": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "OnButtonEvent": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "OnButtonPress": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "OnCommand": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "OnDriverDistraction": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "OnEncodedSyncPData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnHashChange": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnHMIStatus": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnLanguageChange": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnPermissionsChange": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnSystemRequest": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "PerformAudioPassThru": {
            "hmi_levels": [
              "FULL",
              "LIMITED"
            ]
          },
          "PerformInteraction": {
            "hmi_levels": [
              "FULL",
              "LIMITED"
            ]
          },
          "PutFile": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "RegisterAppInterface": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "ResetGlobalProperties": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "ScrollableMessage": {
            "hmi_levels": [
              "FULL"
            ]
          },
          "SetAppIcon": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SetDisplayLayout": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SetGlobalProperties": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SetMediaClockTimer": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "Show": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "Slider": {
            "hmi_levels": [
              "FULL"
            ]
          },
          "Speak": {
            "hmi_levels": [
              "FULL",
              "LIMITED"
            ]
          },
          "SubscribeButton": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "SystemRequest": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "UnregisterAppInterface": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "UnsubscribeButton": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "Location-1": {
        "user_consent_prompt": "Location",
        "rpcs": {
          "GetVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "gps",
              "speed"
            ]
          },
          "OnVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "gps",
              "speed"
            ]
          },
          "SubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "gps",
              "speed"
            ]
          },
          "UnsubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "gps",
              "speed"
            ]
          }
        }
      },
      "Notifications": {
        "user_consent_prompt": "Notifications",
        "rpcs": {
          "Alert": {
            "hmi_levels": [
              "BACKGROUND"
            ]
          }
        }
      },
      "DrivingCharacteristics-3": {
        "user_consent_prompt": "DrivingCharacteristics",
        "rpcs": {
          "GetVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "accPedalPosition",
              "beltStatus",
              "driverBraking",
              "myKey",
              "prndl",
              "rpm",
              "steeringWheelAngle"
            ]
          },
          "OnVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "accPedalPosition",
              "beltStatus",
              "driverBraking",
              "myKey",
              "prndl",
              "rpm",
              "steeringWheelAngle"
            ]
          },
          "SubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "accPedalPosition",
              "beltStatus",
              "driverBraking",
              "myKey",
              "prndl",
              "rpm",
              "steeringWheelAngle"
            ]
          },
          "UnsubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "accPedalPosition",
              "beltStatus",
              "driverBraking",
              "myKey",
              "prndl",
              "rpm",
              "steeringWheelAngle"
            ]
          }
        }
      },
      "VehicleInfo-3": {
        "user_consent_prompt": "VehicleInfo",
        "rpcs": {
          "GetVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "bodyInformation",
              "deviceStatus",
              "engineTorque",
              "externalTemperature",
              "fuelLevel",
              "fuelLevel_State",
              "headLampStatus",
              "instantFuelConsumption",
              "odometer",
              "tirePressure",
              "vin",
              "wiperStatus"
            ]
          },
          "OnVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "bodyInformation",
              "deviceStatus",
              "engineTorque",
              "externalTemperature",
              "fuelLevel",
              "fuelLevel_State",
              "headLampStatus",
              "instantFuelConsumption",
              "odometer",
              "tirePressure",
              "vin",
              "wiperStatus"
            ]
          },
          "SubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "bodyInformation",
              "deviceStatus",
              "engineTorque",
              "externalTemperature",
              "fuelLevel",
              "fuelLevel_State",
              "headLampStatus",
              "instantFuelConsumption",
              "odometer",
              "tirePressure",
              "wiperStatus"
            ]
          },
          "UnsubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "bodyInformation",
              "deviceStatus",
              "engineTorque",
              "externalTemperature",
              "fuelLevel",
              "fuelLevel_State",
              "headLampStatus",
              "instantFuelConsumption",
              "odometer",
              "tirePressure",
              "wiperStatus"
            ]
          }
        }
      },
      "Emergency-1": {
        "rpcs": {
          "GetVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "airbagStatus",
              "clusterModeStatus",
              "eCallInfo",
              "emergencyEvent"
            ]
          },
          "OnVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "airbagStatus",
              "clusterModeStatus",
              "eCallInfo",
              "emergencyEvent"
            ]
          },
          "SubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "airbagStatus",
              "clusterModeStatus",
              "eCallInfo",
              "emergencyEvent"
            ]
          },
          "UnsubscribeVehicleData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ],
            "parameters": [
              "airbagStatus",
              "clusterModeStatus",
              "eCallInfo",
              "emergencyEvent"
            ]
          }
        }
      },
      "Navigation-1": {
        "rpcs": {
          "AlertManeuver": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "ShowConstantTBT": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "UpdateTurnList": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "PropriataryData-1": {
        "rpcs": {
          "DiagnosticMessage": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "GetDTCs": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "ReadDID": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "ProprietaryData-3": {
        "rpcs": {
          "GetDTCs": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "ReadDID": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "DataConsent-2": {
        "user_consent_prompt": "DataConsent",
        "rpcs": null
      },
      "PropriataryData-2": {
        "rpcs": {
          "DiagnosticMessage": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "GetDTCs": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          },
          "ReadDID": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "DiagnosticMessageOnly": {
        "rpcs": {
          "DiagnosticMessage": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "OnKeyboardInputOnlyGroup": {
        "rpcs": {
          "OnKeyboardInput": {
            "hmi_levels": [
              "FULL"
            ]
          }
        }
      },
      "OnTouchEventOnlyGroup": {
        "rpcs": {
          "OnTouchEvent": {
            "hmi_levels": [
              "FULL"
            ]
          }
        }
      },
      "BaseBeforeDataConsent": {
        "rpcs": {
          "ChangeRegistration": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "DeleteFile": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "EncodedSyncPData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "ListFiles": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnAppInterfaceUnregistered": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnEncodedSyncPData": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnHashChange": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnHMIStatus": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnLanguageChange": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnPermissionsChange": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "OnSystemRequest": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "PutFile": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "RegisterAppInterface": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "ResetGlobalProperties": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SetAppIcon": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SetDisplayLayout": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SetGlobalProperties": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "SystemRequest": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          },
          "UnregisterAppInterface": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED",
              "NONE"
            ]
          }
        }
      },
      "SendLocation": {
        "rpcs": {
          "SendLocation": {
            "hmi_levels": [
              "BACKGROUND",
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "BackgroundAPT": {
        "rpcs": {
          "EndAudioPassThru": {
            "hmi_levels": [
              "BACKGROUND"
            ]
          },
          "OnAudioPassThru": {
            "hmi_levels": [
              "BACKGROUND"
            ]
          },
          "PerformAudioPassThru": {
            "hmi_levels": [
              "BACKGROUND"
            ]
          }
        }
      },
      "DialNumberOnly": {
        "rpcs": {
          "DialNumber": {
            "hmi_levels": [
              "FULL",
              "LIMITED"
            ]
          }
        }
      },
      "SendLocationOnly": {
        "rpcs": {
          "SendLocation": {
            "hmi_levels": [
              "FULL",
              "LIMITED"
            ]
          }
        }
      }
    },
    "consumer_friendly_messages": {
      "version": "001.001.023",
      "messages": {
        "AppPermissions": {
          "languages": {
            "de-de": {
              "tts": "%appName% benötigt die folgenden Fahrzeuginformationen und Zugriffsberechtigungen: %functionalGroupLabels%. Wenn Sie Ja drücken, erklären Sie sich damit einverstanden, dass %vehicleMake% nicht für Schäden oder Verletzungen der Privatsphäre haftet, die im Zusammenhang mit der Nutzung Ihrer Benutzerdaten durch %appName% entstehen. Mit Ja stimmen Sie zu; mit Nein lehnen Sie ab.",
              "line1": "Zugriffsanfrage(n)",
              "line2": "erlauben?"
            },
            "en-au": {
              "tts": "%appName% is requesting the use of the following vehicle information and permissions: %functionalGroupLabels%. If you press Yes, you agree that %vehicleMake% will not be liable for any damages or loss of privacy related to %appName%'s use of your data. Please press Yes to allow or No to deny.",
              "line1": "Grant requested",
              "line2": "permission(s)?"
            },
            "en-gb": {
              "tts": "%appName% is requesting the use of the following vehicle information and permissions: %functionalGroupLabels%. If you press Yes, you agree that %vehicleMake% will not be liable for any damages or loss of privacy related to %appName%`s use of your data. Please press Yes to allow or No to deny.",
              "line1": "Grant requested",
              "line2": "permission(s)?",
              "textBody": "%appName% is requesting the use of the following vehicle information and permissions: %functionalGroupLabels%. If you press yes, you agree that %vehicleMake% will not be liable for any damages or loss of privacy related to %appName%`s use of your data. You can change these permissions and hear detailed descriptions in the mobile apps settings menu."
            },
            "en-ie": {
              "tts": "%appName% is requesting the use of the following vehicle information and permissions: %functionalGroupLabels%. If you press Yes, you agree that %vehicleMake% will not be liable for any damages or loss of privacy related to %appName%'s use of your data. Please press Yes to allow or No to deny.",
              "line1": "Grant requested",
              "line2": "permission(s)?"
            },
            "en-us": {
              "tts": "%appName% is requesting permission to use the following: %functionalGroupLabels%.\r\nTo disable or change these settings at any time visit the SYNC mobile apps settings menu. See App terms of service and privacy policies. Ford is not responsible for App functionality. Avoid distractions and use voice controls where available. Please press yes to allow or no to deny.",
              "line1": "Grant Requested",
              "line2": "Permission(s)?",
              "textBody": "The %appName% App is requesting permission to use the following: %functionalGroupLabels%.\r\n\r\nTo disable or change these settings at any time visit the SYNC mobile apps settings menu. See App terms of service and privacy policies. Ford is not responsible for App functionality. Avoid distractions and use voice controls where available. I agree and consent."
            },
            "es-en": {
              "tts": "%appName% solicita el uso de la siguiente información y permisos del vehículo: %functionalGroupLabels%. Si presiona Sí, acepta que %vehicleMake% no se hará responsable por los daños o pérdidas de privacidad relacionados con el uso que %appName% haga de sus datos. Presione Sí para permitir y No para denegar.",
              "line1": "¿Otorgar permiso(s)",
              "line2": "solicitado(s)?",
              "textBody": "La App %appName% solicita permiso para usar: %functionalGroupLabels%. \r\n\r\nPara desactivar o cambiar la configuración, acceda al menú de SYNC® de configuración de apps. Consulte términos de servicio y políticas de privacidad de la App. Ford no es responsable de la funcionalidad de la App. Evite distracciones y use los controles de voz cuando estén disponibles. Estoy de acuerdo y acepto lo anterior."
            },
            "es-es": {
              "tts": "%appName% está solicitando el uso de los siguientes permisos e información del vehículo: %functionalGroupLabels%. Si pulsa sí, acepta que %vehicleMake% no será responsable de los daños o la pérdida de privacidad relacionados con el uso de sus datos por parte de %appName%. Pulse sí para permitir o no para denegar.",
              "line1": "¿Conceder permisos",
              "line2": "solicitados?"
            },
            "es-mx": {
              "tts": "%appName% solicita el uso de la siguiente información y permisos del vehículo: %functionalGroupLabels%. Si presiona Sí, acepta que %vehicleMake% no se hará responsable por los daños o pérdidas de privacidad relacionados con el uso que %appName% haga de sus datos. Presione Sí para permitir y No para denegar.",
              "line1": "¿Otorgar permiso(s)",
              "line2": "solicitado(s)?",
              "textBody": "La App %appName% solicita permiso para usar: %functionalGroupLabels%. \r\n\r\nPara desactivar o cambiar la configuración, acceda al menú de SYNC® de configuración de apps. Consulte términos de servicio y políticas de privacidad de la App. Ford no es responsable de la funcionalidad de la App. Evite distracciones y use los controles de voz cuando estén disponibles. Estoy de acuerdo y acepto lo anterior."
            },
            "fr-ca": {
              "tts": "L’application %appName% demande la permission d’utiliser : %functionalGroupLabels%. \r\nPour désactiver ou modifier ces réglages de données à tout moment, consultez le menu de réglages des applications mobiles SYNC. Reportez-vous aux modalités de service et à la politique de confidentialité de l’application. Ford n’est pas responsable de la fonctionnalité de l’application. Évitez les distractions et utilisez les commandes vocales lorsqu’elles sont disponibles. Veuillez appuyer sur Oui pour autoriser ou sur Non pour refuser.",
              "line1": "Accorder permission(s)",
              "line2": "demandée(s)",
              "textBody": "L’application %appName% demande la permission d’utiliser : %functionalGroupLabels%. \r\n\r\nPour désactiver ou modifier ces réglages de données à tout moment, consultez le menu de réglages des applications mobiles SYNC. Reportez-vous aux modalités de service et à la politique de confidentialité de l’application. Ford n’est pas responsable de la fonctionnalité de l’application. Évitez les distractions et utilisez les commandes vocales lorsqu’elles sont disponibles. J’accepte et je consens."
            },
            "fr-fr": {
              "tts": "%appName% demande d’utiliser les informations du véhicule et les permissions suivantes : %functionalGroupLabels%. Si vous appuyez sur Oui, vous acceptez que %vehicleMake% ne sera pas responsable des dommages ou des pertes de confidentialité reliées à l’utilisation de vos données par %appName%. Veuillez appuyer sur Oui pour autoriser ou sur Non pour refuser.",
              "line1": "Accorder permission(s)",
              "line2": "demandée(s)"
            },
            "it-it": {
              "tts": "%appName% richiede l'uso delle seguenti informazioni e autorizzazioni sul veicolo: %functionalGroupLabels%. Se si preme Sì, si acconsente che %vehicleMake% non sarà responsabile per danni o perdita di privacy in relazione all'impiego dei dati da parte di %appName%. Premere Sì per consentire e No per negare.",
              "line1": "Concedi autorizzaz.",
              "line2": "richiesta(e)?"
            },
            "nl-nl": {
              "tts": "%appName% vraagt gebruikmaking van de volgende voertuiginformatie en toestemmingen aan: %functionalGroupLabels%. Als u op Ja drukt, gaat u ermee akkoord dat %vehicleMake% in geen geval aansprakelijk gesteld kan worden voor schade of verlies van privacy als gevolg van het feit dat %appName% gebruik maakt van uw gegevens. Druk op Ja om dit toe te staan of Nee om te weigeren.",
              "line1": "Aangevraagde",
              "line2": "permissie(s) verlenen?"
            },
            "pl-pl": {
              "tts": "%appName% wymaga następujących informacji o pojeździe oraz pozwoleń: %functionalGroupLabels%. Naciśnięcie TAK oznacza zgodę na fakt, iż %vehicleMake% nie będzie ponosić odpowiedzialności za szkody ani utratę prywatności w związku z wykorzystaniem przez %appName% danych, należących do użytkownika. Naciśnij TAK w celu udzielenia zgody lub NIE w celu odrzucenia żądania.",
              "line1": "Udzielić żądanych",
              "line2": "pozwoleń?"
            },
            "pt-br": {
              "tts": "%appName% está solicitando o uso das seguintes informações e permissões do veículo: %functionalGroupLabels%. Se pressionar sim, você concorda que a %vehicleMake% não será responsável por danos ou perdas de privacidade relacionados ao uso dos seus dados por %appName%. Pressione sim para permitir ou não para negar.",
              "line1": "Conceder permissão",
              "line2": "solicitada?"
            },
            "pt-pt": {
              "tts": "%appName% está a solicitar a utilização das seguintes informações e permissões do veículo: %functionalGroupLabels%. Se premir “Sim”, concorda que %vehicleMake% não será responsável por quaisquer danos ou perda de privacidade relacionada com a utilização dos seus dados por parte de %appName%. Prima “Sim” para permitir ou “Não” para recusar.",
              "line1": "Conceder permiss.",
              "line2": "solicitada(s)?"
            },
            "ru-ru": {
              "tts": "%appName% запрашивает следующую информацию об автомобиле и разрешения: %functionalGroupLabels%. Нажатием \"\"да\"\", Вы соглашаетесь, что %vehicleMake% не будет нести ответственность за какие-либо убытки или потерю прайвеси, связанные с использованием Ваших данных компанией %appName%. Нажмите \"\"Да\"\", если Вы согласны, или \"\"Нет\"\" - если не согласны.",
              "line1": "Предост. заправш.",
              "line2": "разрешения?"
            },
            "sv-se": {
              "tts": "%appName% begär att få tillgång till följande fordonsinformation och tillstånd: %functionalGroupLabels%. Om du trycker Ja godkänner du att %vehicleMake% ska hållas skadeslös för alla skador som kan uppstå eller eventuella integritetsintrång som uppstår när %appName% använder dina data. Tryck Ja för att godkänna eller Nej för att neka.",
              "line1": "Vill du ge",
              "line2": "tillstånd?"
            },
            "tr-tr": {
              "tts": "%appName%, şu araç bilgilerini ve izinleri kullanma isteğinde bulunuyor: %functionalGroupLabels%. Evet'e basarsanız, %appName%'in verilerinizi kullanması sonucunda oluşabilecek hasarlardan veya gizlilik kaybından %vehicleMake%'in sorumlu olmayacağını kabul etmiş olacaksınız. Lütfen kabul etmek için Evet'e veya reddetmek için Hayır'a basın.",
              "line1": "İstenen izinler",
              "line2": "verilsin mi?"
            },
            "zh-cn": {
              "tts": "%appName% 正在请求使用下列车辆信息和权限： %functionalGroupLabels%。如果您按“是”，则表示您同意。 %vehicleMake% 将不会对因 %appName% 使用您的数据而引起的任何损毁或隐私损失负责。 请按“是”允许或按“否”拒绝。",
              "line1": "是否允许请求的",
              "line2": "权限？"
            },
            "zh-tw": {
              "tts": "%appName% 正請求使用 %functionalGroupLabels% 的車輛資訊和許可。按「是」，表示您同意，如因 %appName% 使用您的資料導致任何損害或損失，%vehicleMake% 將不負賠償責任。同意請按「是」，拒絕請按「否」。",
              "line1": "允許",
              "line2": "授權請求?"
            }
          }
        },
        "AppPermissionsHelp": {
          "languages": {
            "de-de": {
              "tts": "%appName% fordert folgende Fahrzeuginformationen und Zugriffsberechtigungen: %functionalGroupLabels%. Im Einstellungsmenü der mobilen Apps können Sie diese Berechtigungen ändern und sich detaillierte Beschreibungen anhören. Mit Ja stimmen Sie zu; mit Nein lehnen Sie ab."
            },
            "en-au": {
              "tts": "%appName% is requesting the following vehicle information and permissions: %functionalGroupLabels%. You can change these permissions and hear detailed descriptions in the mobile apps settings menu. Please press Yes to grant permissions or No to deny."
            },
            "en-gb": {
              "tts": "%appName% is requesting the following vehicle information and permissions: %functionalGroupLabels%. You can change these permissions and hear detailed descriptions in the mobile apps settings menu. Please press Yes to grant permissions or No to deny."
            },
            "en-ie": {
              "tts": "%appName% is requesting the following vehicle information and permissions: %functionalGroupLabels%. You can change these permissions and hear detailed descriptions in the mobile apps settings menu. Please press Yes to grant permissions or No to deny."
            },
            "en-us": {
              "tts": "%appName% is requesting the following vehicle information and permissions: %functionalGroupLabels%. You can change these permissions and hear detailed descriptions in the mobile apps settings menu. Please press yes to grant permissions or no to deny."
            },
            "es-en": {
              "tts": "%appName% solicita la siguiente información y permisos del vehículo: %functionalGroupLabels%. Puede cambiar estos permisos y consultar descripciones detalladas en el menú de configuración de las aplicaciones móviles. Presione Sí para otorgar permisos y No para denegar."
            },
            "es-es": {
              "tts": "%appName% está solicitando los siguientes permisos e información del vehículo: %functionalGroupLabels%. Puede cambiar estos permisos y escuchar descripciones detalladas en el menú de configuración de la aplicación móvil. Pulse sí para conceder el permiso o no para denegarlo."
            },
            "es-mx": {
              "tts": "%appName% solicita la siguiente información y permisos del vehículo: %functionalGroupLabels%. Puede cambiar estos permisos y consultar descripciones detalladas en el menú de configuración de las aplicaciones móviles. Presione Sí para otorgar permisos y No para denegar."
            },
            "fr-ca": {
              "tts": "%appName% demande d’utiliser les informations du véhicule et les permissions suivantes : %functionalGroupLabels%. Vous pouvez modifier ces permissions et entendre les descriptions détaillées dans le menu des réglages des applications mobiles. Veuillez appuyer sur Oui pour accorder les permissions ou sur Non pour refuser."
            },
            "fr-fr": {
              "tts": "%appName% demande d’utiliser les informations du véhicule et les permissions suivantes : %functionalGroupLabels%. Vous pouvez modifier ces permissions et entendre les descriptions détaillées dans le menu des réglages des applications mobiles. Veuillez appuyer sur Oui pour accorder les permissions ou sur Non pour refuser."
            },
            "it-it": {
              "tts": "%appName% richiede le seguenti informazioni e autorizzazioni riguardo il veicolo: %functionalGroupLabels%. È possibile modificare tali autorizzazioni e ascoltare descrizioni dettagliate nel menu impostazioni delle app mobili. Premere Sì per concedere le autorizzazioni e No per negarle."
            },
            "nl-nl": {
              "tts": "%appName% vraagt gebruikmaking van de volgende voertuiginformatie en toestemmingen aan: %functionalGroupLabels%. U kunt deze toestemmingen wijzigen en gedetailleerde beschrijvingen beluisteren in het instellingenmenu voor mobiele apps. Druk op Ja om permissies te verlenen of op Nee om te weigeren."
            },
            "pl-pl": {
              "tts": "%appName% wymaga następujących informacji o pojeździe oraz zezwoleń: %functionalGroupLabels%. W menu ustawień aplikacji mobilnych można zmienić owe zezwolenia i usłyszeć ich szczegółowy opis. Naciśnij TAK, aby wyrazić zgodę lub NIE w celu odrzucenia żądania."
            },
            "pt-br": {
              "tts": "%appName% está solicitando as seguintes informações e permissões do veículo: %functionalGroupLabels%. Você pode alterar estas permissões e ouvir descrições detalhadas no menu de configurações de aplicativos móveis. Pressione sim para conceder as permissões ou não para negar."
            },
            "pt-pt": {
              "tts": "%appName% está a solicitar as seguintes informações e permissões do veículo: %functionalGroupLabels%. Pode alterar estas permissões e ouvir descrições detalhadas no menu de definições das aplicações móveis. Prima \"\"Sim\"\" para permitir ou \"\"Não\"\" para recusar."
            },
            "ru-ru": {
              "tts": "%appName% запрашивает следующую информацию об автомобиле и разрешения: %functionalGroupLabels%. Вы можете изменить эти разрешения и прослушать подробные их описания в меню настроек мобильного приложения. Нажмите \"\"да\"\", чтобы предоставить разрешения, или \"\"нет\"\", чтобы не предоставлять."
            },
            "sv-se": {
              "tts": "%appName% begär tillgång till följande fordonsinformation och tillstånd: %functionalGroupLabels%. Du kan ändra tillstånden och höra detaljerade beskrivningar i menyn för mobilappsinställningar. Tryck Ja för att ge tillstånd eller Nej för att neka."
            },
            "tr-tr": {
              "tts": "%appName%, şu araç bilgilerini ve izinleri istiyor: %functionalGroupLabels%. Bu izinleri değiştirebilir ve mobil uygulamalar ayarlar menüsünden ayrıntılı açıklamaları dinleyebilirsiniz. Lütfen izin vermek için Evet'e veya reddetmek için Hayır'a basın."
            },
            "zh-cn": {
              "tts": "%appName% 正在请求下列车辆信息和权限： %functionalGroupLabels%。您可在移动应用程序设置菜单中更改这些权限，并听取详细说明。请按“是”允许权限或按“否”拒绝。"
            },
            "zh-tw": {
              "tts": "%appName% 正請求使用 %functionalGroupLabels% 的車輛資訊和許可。您可在行動應用程式設定清單中更改這些許可，並聆聽詳細說明。給予許可請按「是」，拒絕請按「否」。"
            }
          }
        },
        "AppPermissionsRevoked": {
          "languages": {
            "de-de": {
              "tts": "Die Autorisierungsdaten der App wurden geändert. %appName% hat keinen Zugriff auf %functionalGroupLabels% mehr. Installieren Sie die neueste Version der App auf Ihrem Gerät.."
            },
            "en-au": {
              "tts": "App authorizations have changed. %appName% can no longer access %functionalGroupLabels%. Please ensure you have the most recent app version installed on your mobile device."
            },
            "en-gb": {
              "tts": "App authorizations have changed. %appName% can no longer access %functionalGroupLabels%. Please ensure you have the most recent app version installed on your mobile device."
            },
            "en-ie": {
              "tts": "App authorizations have changed. %appName% can no longer access %functionalGroupLabels%. Please ensure you have the most recent app version installed on your mobile device."
            },
            "en-us": {
              "tts": "App authorizations have changed. %appName% can no longer access %functionalGroupLabels%. Please ensure you have the most recent app version installed on your mobile device."
            },
            "es-en": {
              "tts": "Las autorizaciones de la aplicación han cambiado. %appName% ya no puede acceder a %functionalGroupLabels%. Asegúrese de haber instalado la versión más reciente de la aplicación en su dispositivo móvil."
            },
            "es-es": {
              "tts": "Las autorizaciones de la aplicación han cambiado. %appName% ya no puede acceder a %functionalGroupLabels%. Asegúrese de que tiene la versión más reciente de la aplicación instalada en su dispositivo móvil."
            },
            "es-mx": {
              "tts": "Las autorizaciones de la aplicación han cambiado. %appName% ya no puede acceder a %functionalGroupLabels%. Asegúrese de haber instalado la versión más reciente de la aplicación en su dispositivo móvil."
            },
            "fr-ca": {
              "tts": "Les autorisations pour app ont changé. %appName% ne peut plus accéder à %functionalGroupLabels%. Veuillez vous assurer que la plus récente version de l’application est installée sur votre appareil mobile."
            },
            "fr-fr": {
              "tts": "Les autorisations pour app ont changé. %appName% ne peut plus accéder à %functionalGroupLabels%. Veuillez vous assurer que la plus récente version de l’application est installée sur votre appareil mobile."
            },
            "it-it": {
              "tts": "Le autorizzazioni dell'app sono cambiate. %appName% non è più in grado di accedere a %functionalGroupLabels%. Assicurarsi di avere la versione più recente dell'app installata sul dispositivo mobile."
            },
            "nl-nl": {
              "tts": "De app-autorisaties zijn gewijzigd. %appName% heeft geen toegang meer tot %functionalGroupLabels%. Zorg ervoor dat u de meest recente app-versie op uw mobiele apparaat geïnstalleerd hebt."
            },
            "pl-pl": {
              "tts": "Dane dostępu aplikacji zostały zmienione. %appName% nie ma już dostępu do %functionalGroupLabels%. Sprawdź, czy na telefonie komórkowym zainstalowano najnowszą wersję aplikacji."
            },
            "pt-br": {
              "tts": "As autorizações dos aplicativos foram alteradas. %appName% não pode mais acessar %functionalGroupLabels%. Certifique-se de que a versão mais recente do aplicativo está instalada no seu dispositivo móvel."
            },
            "pt-pt": {
              "tts": "As autorizações das aplicações mudaram. %appName% já não consegue aceder a %functionalGroupLabels%. Certifique-se de que tem a última versão da aplicação no seu dispositivo móvel."
            },
            "ru-ru": {
              "tts": "Авторизации приложения изменены. %appName% больше не имеет доступа к %functionalGroupLabels%. Убедитесь, что на вашем мобильном устройстве установлена самая новая версия приложения."
            },
            "sv-se": {
              "tts": "Appens behörigheter har ändrats. %appName% har inte längre åtkomst till %functionalGroupLabels%. Kontrollera att du har installerat den senaste versionen av appen på mobilenheten."
            },
            "tr-tr": {
              "tts": "Uygulama yetkileri değişti. %appName% artık %functionalGroupLabels%'e erişemeyecek. Lütfen mobil aygıtınızda en son uygulama sürümünün yüklü olduğundan emin olun."
            },
            "zh-cn": {
              "tts": "应用程序授权已变更。 %appName% 将不能再访问 %functionalGroupLabels%。 请确认您的移动设备上安装的应用程序是最新版本。"
            },
            "zh-tw": {
              "tts": "應用程式授權已改變。%appName% 已無法進入 %functionalGroupLabels%。請確認您的行動裝置上安裝了最新版應用程式。"
            }
          }
        },
        "AppUnauthorized": {
          "languages": {
            "de-de": {
              "tts": "Diese Version von %appName% ist nicht autorisiert und wird nicht mit SYNC funktionieren.",
              "line1": "nicht autorisiert"
            },
            "en-au": {
              "tts": "This version of %appName% is not authorized and will not work with SYNC.",
              "line1": "not authorized"
            },
            "en-gb": {
              "tts": "This version of %appName% is not authorized and will not work with SYNC.",
              "line1": "not authorized",
              "textBody": "This version of %appName% is not authorized and will not work with SYNC."
            },
            "en-ie": {
              "tts": "This version of %appName% is not authorized and will not work with SYNC.",
              "line1": "not authorized"
            },
            "en-us": {
              "tts": "This version of %appName% is not authorized and will not work with SYNC.",
              "line1": "Not Authorized",
              "textBody": "This version of %appName% is no longer authorized to work with Mobile Apps. Please update to the latest version of %appName%."
            },
            "es-en": {
              "tts": "Esta versión de %appName% no tiene autorización y no funcionará con SYNC.",
              "line1": "no autorizada",
              "textBody": "Esta versión de %appName% no tiene autorización y no funcionará con SYNC."
            },
            "es-es": {
              "tts": "Esta versión de %appName% no está autorizada y no funcionará con SYNC.",
              "line1": "No autorizada"
            },
            "es-mx": {
              "tts": "Esta versión de %appName% no tiene autorización y no funcionará con SYNC.",
              "line1": "no autorizada",
              "textBody": "Esta versión de %appName% no tiene autorización y no funcionará con SYNC."
            },
            "fr-ca": {
              "tts": "Cette version de %appName% n’est pas autorisée et ne fonctionnera pas avec SYNC.",
              "line1": "non autorisée",
              "textBody": "Cette version de %appName% n’est pas autorisée et ne fonctionnera pas avec SYNC."
            },
            "fr-fr": {
              "tts": "Cette version de %appName% n’est pas autorisée et ne fonctionnera pas avec SYNC.",
              "line1": "non autorisée"
            },
            "it-it": {
              "tts": "Questa versione di %appName% non è autorizzata e non funziona con il SYNC.",
              "line1": "non autorizzata"
            },
            "nl-nl": {
              "tts": "Deze versie van %appName% is niet geautoriseerd en werkt niet met SYNC.",
              "line1": "niet geautoriseerd"
            },
            "pl-pl": {
              "tts": "Niniejsza wersja %appName% nie posiada autoryzacji i nie będzie działać z SYNC.",
              "line1": "brak autoryzacji"
            },
            "pt-br": {
              "tts": "Esta versão do %appName% não tem autorização e não funcionará com o SYNC.",
              "line1": "não autorizado"
            },
            "pt-pt": {
              "tts": "Esta versão de %appName% não está autorizada e não funcionará com o SYNC.",
              "line1": "não autorizada"
            },
            "ru-ru": {
              "tts": "Эта версия %appName% не авторизирована и не будет работать с SYNC.",
              "line1": "не авторизировано"
            },
            "sv-se": {
              "tts": "Den här versionen av %appName% är inte godkänd och fungerar inte med SYNC.",
              "line1": "är ej godkänd"
            },
            "tr-tr": {
              "tts": "Bu %appName% sürümüne izin verilmediğinden SYNC ile çalışamaz.",
              "line1": "için izin yok"
            },
            "zh-cn": {
              "tts": "此版本的%appName% 未得到授权，无法在SYNC上使用。",
              "line1": "未得到授权"
            },
            "zh-tw": {
              "tts": "%appName% 的版本未獲得授權，將無法透過 SYNC 使用。",
              "line1": "無授權"
            }
          }
        },
        "AppUnsupported": {
          "languages": {
            "de-de": {
              "tts": "Diese Version von %appName% wird von SYNC nicht unterstützt.",
              "line1": "nicht unterstützt"
            },
            "en-au": {
              "tts": "This version of %appName% is not supported by SYNC.",
              "line1": "not supported"
            },
            "en-gb": {
              "tts": "This version of %appName% is not supported by SYNC.",
              "line1": "not supported",
              "textBody": "This version of %appName% is not supported by SYNC."
            },
            "en-ie": {
              "tts": "This version of %appName% is not supported by SYNC.",
              "line1": "not supported"
            },
            "en-us": {
              "tts": "This version of %appName% is not supported by SYNC.",
              "line1": "Not Supported",
              "textBody": "Your version of %appName% is not supported by SYNC."
            },
            "es-en": {
              "tts": "Esta versión de %appName% no es compatible con SYNC.",
              "line1": "no compatible",
              "textBody": "Esta versión de %appName% no es compatible con SYNC."
            },
            "es-es": {
              "tts": "Esta versión de %appName% no es compatible con SYNC.",
              "line1": "No compatible"
            },
            "es-mx": {
              "tts": "Esta versión de %appName% no es compatible con SYNC.",
              "line1": "no compatible",
              "textBody": "Esta versión de %appName% no es compatible con SYNC."
            },
            "fr-ca": {
              "tts": "Cette version de %appName% n’est pas prise en charge par SYNC.",
              "line1": "incompatible",
              "textBody": "Cette version de %appName% n’est pas prise en charge par SYNC."
            },
            "fr-fr": {
              "tts": "Cette version de %appName% n’est pas prise en charge par SYNC.",
              "line1": "incompatible"
            },
            "it-it": {
              "tts": "Questa versione di %appName% non è supportata dal SYNC.",
              "line1": "non supportata"
            },
            "nl-nl": {
              "tts": "Deze versie van %appName% wordt niet ondersteund door SYNC.",
              "line1": "niet ondersteund"
            },
            "pl-pl": {
              "tts": "Niniejsza wersja %appName% nie jest obsługiwana przez system SYNC.",
              "line1": "aplikacja nie obsług."
            },
            "pt-br": {
              "tts": "Esta versão do %appName% não é suportada pelo SYNC.",
              "line1": "não suportado"
            },
            "pt-pt": {
              "tts": "Esta versão de %appName% não é suportado pelo SYNC.",
              "line1": "não suportada"
            },
            "ru-ru": {
              "tts": "Эта версия %appName% не поддерживается SYNC.",
              "line1": "не поддерживается"
            },
            "sv-se": {
              "tts": "SYNC har inte stöd för den här versionen av %appName%.",
              "line1": "stöds ej"
            },
            "tr-tr": {
              "tts": "Bu %appName% sürümü SYNC tarafından desteklenmiyor.",
              "line1": "desteklenmiyor"
            },
            "zh-cn": {
              "tts": "SYNC不支持此版本的%appName%。",
              "line1": "不受支持"
            },
            "zh-tw": {
              "tts": "SYNC 不支援此版本的%appName% 。",
              "line1": "不支援"
            }
          }
        },
        "DataConsent": {
          "languages": {
            "en-gb": {
              "textBody": "Would you like to enable Mobile Apps on SYNC? To use Mobile Apps with SYNC, SYNC will communicate with Ford at least once per month using your mobile device’s data plan. Standard rates may apply. SYNC will send your VIN and SYNC module number to Ford U.S. \r\n\r\nUpdates are about the size of an email, and the occurrence of updates depends on your vehicle usage and when a new app is found on your device. To turn on or off, visit the SYNC Settings menu. See your Owner Guide for more information."
            },
            "en-us": {
              "line1": "Enable Mobile Apps",
              "line2": "on SYNC? (Uses Data)",
              "textBody": "Would you like to enable Mobile Apps on SYNC?\r\n\r\nIf you enable the use of mobile apps from your mobile device on SYNC, you agree that SYNC can periodically use your device’s data plan to send and receive data that keeps your settings current and enables app functionality. Data sent to Ford U.S. includes your VIN and SYNC module number. Standard rates may apply.\r\n\r\nTo change settings or turn off later, visit the SYNC mobile apps settings menu. See Owner Guide for more information. I agree and consent."
            },
            "es-mx": {
              "textBody": "Si permite el uso de apps de su móvil vía SYNC®, acepta que SYNC® puede utilizar el plan de datos de su equipo para enviar y recibir info para actualizar su configuración y permitir la funcionalidad de la app. Datos enviados a Ford US incluyen VIN y # de módulo de SYNC®. Cargos a su plan de datos pueden aplicar. \r\n\r\nPara cambiar la config. de SYNC® o apagarlo, acceda a Menú de configuración de apps. Vea la Guía del Propietario para más info. Estoy de acuerdo y acepto lo anterior."
            },
            "fr-ca": {
              "textBody": "Si vous activez les applications mobiles sur SYNC, vous acceptez que SYNC utilise votre forfait de données afin de maintenir vos réglages à jour et assurer la pleine fonctionnalité. Parmi les données envoyées à Ford US, notons le NIV et le numéro de module SYNC. Des frais de base peuvent s’appliquer. \r\n\r\nPour modifier les réglages ou désactiver les applications, consultez le menu des réglages des applications de SYNC. Voir le Manuel du propriétaire. J’accepte et je consens."
            }
          }
        },
        "DataConsentHelp": {
          "languages": {
            "en-us": {
              "textBody": "By enabling mobile apps, you consent to allowing SYNC to communicate with Ford at least once per month using your mobile device’s data plan. Disabling will stop all data usage, but you will not be able to use mobile apps on SYNC. See your Owner Guide for more information."
            },
            "es-mx": {
              "textBody": "Las actualizaciones tienen el tamaño aproximado de un mensaje de correo electrónico, y la frecuencia de las actualizaciones depende del uso de su vehículo y de si se encuentran nuevas aplicaciones en su dispositivo. Para obtener más información, consulte la Guía del propietario."
            },
            "fr-ca": {
              "textBody": "Les mises à jour ont la taille d’un courriel et la fréquence des mises à jour dépend de l’utilisation de votre véhicule et si une nouvelle application se trouve sur votre appareil. Consultez le Guide de l’utilisateur pour obtenir d’autres renseignements."
            }
          }
        },
        "DisableApps": {
          "languages": {
            "de-de": {
              "tts": "Ausschalten der automatischen Updates führt zum Ausschalten von SYNC mobile Apps. Sie können Ihre mobilen Apps dann nicht mehr mit SYNC nutzen. Bitte drücken Sie Ja zur Bestätigung oder Nein, um abzubrechen.",
              "line1": "Auto-Update",
              "line2": "und Mobile Apps deaktivieren"
            },
            "en-au": {
              "tts": "Disabling automatic updates will also disable SYNC mobile apps. You will not be able to use any mobile apps with SYNC. Please press Yes to confirm or No to cancel.",
              "line1": "Disable auto-updates",
              "line2": "and Mobile Apps?"
            },
            "en-gb": {
              "tts": "Disabling automatic updates will also disable SYNC mobile apps. You will not be able to use any mobile apps with SYNC. Please press Yes to confirm or No to cancel.",
              "line1": "Disable auto-updates",
              "line2": "and Mobile Apps?",
              "textBody": "Disabling automatic updates will also disable SYNC mobile apps. You will not be able to use any mobile apps with SYNC. Please press Yes to confirm or No to cancel."
            },
            "en-ie": {
              "tts": "Disabling automatic updates will also disable SYNC mobile apps. You will not be able to use any mobile apps with SYNC. Please press Yes to confirm or No to cancel.",
              "line1": "Disable auto-updates",
              "line2": "and Mobile Apps?"
            },
            "en-us": {
              "tts": "Disabling automatic updates will also disable sync mobile apps. You will not be able to use any mobile apps with SYNC. Please press yes to confirm or no to cancel.",
              "line1": "Disable Auto-Updates",
              "line2": "and Mobile Apps?",
              "textBody": "If you disable, you will not be able to use any mobile apps with SYNC and your vehicle will stop receiving mobile app permission updates via your device`s data plan. Please press yes to disable mobile apps or no to cancel."
            },
            "es-en": {
              "tts": "Si se desactivan las actualizaciones automáticas, también se desactivarán las aplicaciones móviles de SYNC. No podrá usar ninguna aplicación móvil con SYNC. Presione Sí para confirmar o No para cancelar.",
              "line1": "¿Deshab. actualiz.",
              "line2": "autom. y aplic. móv.?",
              "textBody": "Si se desactivan las actualizaciones automáticas, también se desactivarán las aplicaciones móviles de SYNC. No podrá usar ninguna aplicación móvil con SYNC. Presione Sí para confirmar o No para cancelar."
            },
            "es-es": {
              "tts": "Si desactiva las actualizaciones automáticas, también se desactivará la sincronización de las aplicaciones móviles. No podrá utilizar ninguna aplicación móvil con SYNC. Pulse sí para confirmar o no para cancelar.",
              "line1": "¿Desact. actual. auto",
              "line2": "y apl. móviles?"
            },
            "es-mx": {
              "tts": "Si se desactivan las actualizaciones automáticas, también se desactivarán las aplicaciones móviles de SYNC. No podrá usar ninguna aplicación móvil con SYNC. Presione Sí para confirmar o No para cancelar.",
              "line1": "¿Deshab. actualiz.",
              "line2": "autom. y aplic. móv.?",
              "textBody": "Si se desactivan las actualizaciones automáticas, también se desactivarán las aplicaciones móviles de SYNC. No podrá usar ninguna aplicación móvil con SYNC. Presione Sí para confirmar o No para cancelar."
            },
            "fr-ca": {
              "tts": "La désactivation des mises à jour automatiques désactivera aussi les applications mobiles SYNC. Vous ne pourrez pas utiliser d’application mobile avec SYNC. Veuillez appuyer sur Oui pour confirmer ou sur Non pour annuler.",
              "line1": "Désactiver màj autom.",
              "line2": "et app. mobiles?",
              "textBody": "La désactivation des mises à jour automatiques désactivera aussi les applications mobiles SYNC. Vous ne pourrez pas utiliser d’application mobile avec SYNC. Veuillez appuyer sur Oui pour confirmer ou sur Non pour annuler."
            },
            "fr-fr": {
              "tts": "La désactivation des mises à jour automatiques désactivera aussi les applications mobiles SYNC. Vous ne pourrez pas utiliser d’application mobile avec SYNC. Veuillez appuyer sur Oui pour confirmer ou sur Non pour annuler.",
              "line1": "Désactiver màj autom.",
              "line2": "et app. mobiles?"
            },
            "it-it": {
              "tts": "Disabilitando gli aggiornamenti automatici si disattiva anche la sincronizzazione delle app mobili. Non sarà possibile usare app mobili con il SYNC. Premere Sì per confermare e No per cancellare.",
              "line1": "Disabilitare agg. aut.",
              "line2": "e app mobili?"
            },
            "nl-nl": {
              "tts": "Door automatische updates uit te schakelen, schakelt u ook SYNC-mobiele apps uit. U kunt dan geen mobiele apps meer gebruiken met SYNC. Druk op Ja om te bevestigen of op Nee om te annuleren.",
              "line1": "Auto-updates en mob.",
              "line2": "apps uitschakelen?"
            },
            "pl-pl": {
              "tts": "Wyłączenie automatycznych aktualizacji spowoduje także wyłączenie aplikacji mobilnych SYNC. Korzystanie z mobilnych aplikacji za pomocą SYNC będzie niemożliwe. Naciśnij TAK, by potwierdzić lub NIE, by anulować.",
              "line1": "Wył. automat. aktual.",
              "line2": "i aplikacje mobilne?"
            },
            "pt-br": {
              "tts": "Se as atualizações automáticas forem desativadas, os aplicativos também serão desativados. Você não poderá usar nenhum aplicativo com o SYNC. Pressione sim para confirmar ou não para cancelar.",
              "line1": "Desativar atualizações",
              "line2": "autom. e aplicativos?"
            },
            "pt-pt": {
              "tts": "A desactivação das actualizações automáticas desactiva igualmente as aplicações móveis do SYNC. Não poderá utilizar quaisquer aplicações móveis com o SYNC. Prima \"\"Sim\"\" para confirmar ou \"\"Não\"\" para cancelar.",
              "line1": "Desact. actual. autom.",
              "line2": "e aplicações móveis?"
            },
            "ru-ru": {
              "tts": "При отключении автоматических обновлений также будут отключены мобильные приложения sync. Вы не сможете использовать какие-либо мобильные приложения с SYNC. Нажмите \"\"Да\"\" для подтверждения или \"\"Нет\"\" для отмены.",
              "line1": "Откл. автообновления",
              "line2": "и мобил. прилож.?"
            },
            "sv-se": {
              "tts": "Om du avaktiverar automatisk uppdatering avaktiverar du även synkning av mobilappar. Du kommer inte längre att kunna använda dina mobilappar med SYNC. Tryck Ja för att bekräfta eller Nej för att avbryta.",
              "line1": "Avaktiverar autouppdat.",
              "line2": "och mobilappar?"
            },
            "tr-tr": {
              "tts": "Otomatik güncellemeleri devre dışı bırakırsanız sync mobil uygulamalar da devre dışı kalır. SYNC ile mobil uygulama kullanmanız mümkün olmaz. Lütfen onaylamak için Evet'e veya iptal etmek için Hayır'a basın.",
              "line1": "Oto. güncelleme ve",
              "line2": "mobil uygul. kapat?"
            },
            "zh-cn": {
              "tts": "禁用自动更新同时也会禁用SYNC移动应用程序。您将无法在 SYNC 中使用任何移动应用程序。请按“是”确认或按“否”取消。",
              "line1": "是否禁用自动更新和",
              "line2": "移动应用程序？"
            },
            "zh-tw": {
              "tts": "停用自動更新也將停用 sync 行動應用程式。您將無法透過 SYNC 使用任何行動應用程式。確認請按「是」，取消請按「否」。",
              "line1": "停用自動更新",
              "line2": "和行動應用程式？"
            }
          }
        },
        "DrivingCharacteristics": {
          "languages": {
            "de-de": {
              "tts": "Eine App hat Zugriff auf die folgenden Fahreigenschaften: Kraftstoffverbrauch, MyKey, Sicherheitsgurtstatus.",
              "label": "Fahreigenschaften"
            },
            "en-au": {
              "tts": "An app can access the following driving characteristics: Fuel consumption, MyKey, Seat belt status.",
              "label": "Driving characteristics"
            },
            "en-gb": {
              "tts": "An app can access the following driving characteristics: Fuel consumption, MyKey, Seat belt status.",
              "label": "Driving characteristics",
              "textBody": "An app can access the following driving characteristics: Fuel consumption, MyKey, Seat belt status."
            },
            "en-ie": {
              "tts": "An app can access the following driving characteristics: Fuel consumption, MyKey, Seat belt status.",
              "label": "Driving characteristics"
            },
            "en-us": {
              "tts": "An app can access the following driving characteristics: Fuel Consumption, MyKey, Seat Belt Status, Gear Position, RPM.",
              "label": "Driving Characteristics",
              "textBody": "An app can access the following driving characteristics: Fuel Consumption, MyKey, Seat Belt Status, Gear Position, RPM."
            },
            "es-en": {
              "tts": "Las aplicaciones pueden acceder a las siguientes características del manejo: Consumo de combustible, MyKey, Estado del cinturón de seguridad.",
              "label": "Características del manejo",
              "textBody": "Las aplicaciones pueden acceder a las siguientes características del manejo: Consumo de combustible, MyKey, Estado del cinturón de seguridad."
            },
            "es-es": {
              "tts": "Una aplicación puede acceder a las siguientes características de conducción: Consumo de combustible, MyKey, Estado cinturones de seguridad.",
              "label": "Características de conducción"
            },
            "es-mx": {
              "tts": "Las aplicaciones pueden acceder a las siguientes características del manejo: Consumo de combustible, MyKey, Estado del cinturón de seguridad, RPM del motor, y Posición del cambio.",
              "label": "Características del manejo",
              "textBody": "Las aplicaciones pueden acceder a las siguientes características del manejo: Consumo de combustible, MyKey, Estado del cinturón de seguridad, RPM del motor, y Posición del cambio."
            },
            "fr-ca": {
              "tts": "Une application peut accéder aux caractéristiques de conduite suivantes: Consommation de carburant, MyKey, État des ceintures de sécurité, régime du moteur, et Position d’embrayage.",
              "label": "Caractéristiques de conduite",
              "textBody": "Une application peut accéder aux caractéristiques de conduite suivantes: Consommation de carburant, MyKey, État des ceintures de sécurité, régime du moteur, et Position d’embrayage."
            },
            "fr-fr": {
              "tts": "Une application peut accéder aux caractéristiques de conduite suivantes: Consommation de carburant, MyKey, État des ceintures de sécurité.",
              "label": "Caractéristiques de conduite"
            },
            "it-it": {
              "tts": "Un'app può avere accesso alle seguenti caratteristiche di guida: Consumo carburante, MyKey, Stato cinture di sicurezza.",
              "label": "Caratteristiche di guida"
            },
            "nl-nl": {
              "tts": "Een app heeft toegang tot de volgende rijkenmerken: Brandstofverbruik, MyKey, Veiligheidsgordelstatus.",
              "label": "Rijkenmerken"
            },
            "pl-pl": {
              "tts": "Aplikacja może uzyskać dostęp do następujących informacji dotyczących jazdy: Zużycie paliwa, MyKey, Stan pasów bezpieczeństwa.",
              "label": "Informacje dotyczące stylu jazdy"
            },
            "pt-br": {
              "tts": "Um aplicativo pode acessar as seguintes características de condução: Consumo de combustível, MyKey, Estado do cinto de segurança.",
              "label": "Características de condução",
              "line1": "Caract. Condução"
            },
            "pt-pt": {
              "tts": "Uma aplicação consegue aceder às seguintes informações de condução: Consumo de combustível, MyKey, Estado dos cintos de segurança.",
              "label": "Características de condução"
            },
            "ru-ru": {
              "tts": "Приложение имеет доступ к следующим характеристикам движения: Расход топлива, MyKey, Состояние ремней безопасности.",
              "label": "Характеристики движения"
            },
            "sv-se": {
              "tts": "Appen kan komma åt följande köregenskaper: Bränsleförbrukning, MyKey, Bältesstatus.",
              "label": "Köregenskaper"
            },
            "tr-tr": {
              "tts": "Bir uygulama şu sürüş karakteristiklerine erişebilir: Yakıt tüketimi, MyKey, Emniyet kemeri durumu.",
              "label": "Sürüş karakteristikleri"
            },
            "zh-cn": {
              "tts": "移动应用程序可访问下列行驶特性： 油耗, MyKey, 安全带状态",
              "label": "行驶特性"
            },
            "zh-tw": {
              "tts": "應用程式可存取以下駕駛特性： 油耗, MyKey, 安全帶狀態",
              "label": "駕駛特性"
            }
          }
        },
        "Location": {
          "languages": {
            "de-de": {
              "tts": "Eine App hat Zugriff auf die GPS-Daten und die Geschwindigkeit des Fahrzeugs.",
              "label": "GPS und Geschwindigkeit"
            },
            "en-au": {
              "tts": "An app can access vehicle GPS and speed.",
              "label": "GPS and speed"
            },
            "en-gb": {
              "tts": "An app can access vehicle GPS and speed.",
              "label": "GPS and speed",
              "textBody": "An app can access vehicle GPS and speed."
            },
            "en-ie": {
              "tts": "An app can access vehicle GPS and speed.",
              "label": "GPS and speed"
            },
            "en-us": {
              "tts": "An app can access vehicle GPS and speed.",
              "label": "GPS and Speed",
              "textBody": "An app can access vehicle GPS and speed."
            },
            "es-en": {
              "tts": "Las aplicaciones pueden acceder al GPS y a la velocidad del vehículo.",
              "label": "GPS y velocidad",
              "textBody": "Las aplicaciones pueden acceder al GPS y a la velocidad del vehículo."
            },
            "es-es": {
              "tts": "Una aplicación puede acceder al GPS y la velocidad del vehículo.",
              "label": "GPS y velocidad"
            },
            "es-mx": {
              "tts": "Las aplicaciones pueden acceder al GPS y a la velocidad del vehículo.",
              "label": "GPS y velocidad",
              "textBody": "Las aplicaciones pueden acceder al GPS y a la velocidad del vehículo."
            },
            "fr-ca": {
              "tts": "Une application peut accéder au GPS et à la vitesse du véhicule.",
              "label": "GPS et Vitesse",
              "textBody": "Une application peut accéder au GPS et à la vitesse du véhicule."
            },
            "fr-fr": {
              "tts": "Une application peut accéder au GPS et à la vitesse du véhicule.",
              "label": "GPS et vitesse"
            },
            "it-it": {
              "tts": "Un'app può avere accesso a GPS e velocità del veicolo.",
              "label": "GPS e velocità"
            },
            "nl-nl": {
              "tts": "Een app heeft toegang tot gps en de snelheid van het voertuig.",
              "label": "Gps en snelheid"
            },
            "pl-pl": {
              "tts": "Aplikacja może uzyskać dostęp do modułu GPS i prędkości pojazdu.",
              "label": "GPS i prędkość"
            },
            "pt-br": {
              "tts": "Um aplicativo pode acessar o GPS e a velocidade do veículo.",
              "label": "GPS e velocidade"
            },
            "pt-pt": {
              "tts": "Uma aplicação consegue aceder ao GPS e à velocidade do veículo.",
              "label": "GPS e velocidade"
            },
            "ru-ru": {
              "tts": "Приложение имеет доступ к GPS и скорости автомобиля.",
              "label": "GPS и скорость"
            },
            "sv-se": {
              "tts": "Appen kan komma åt fordonets GPS och hastighetsmätare.",
              "label": "GPS och hastighet"
            },
            "tr-tr": {
              "tts": "Bu uygulama aracın GPS ve hız bilgilerine erişebilir.",
              "label": "GPS ve hız"
            },
            "zh-cn": {
              "tts": "移动应用程序可以访问车辆 GPS 和车速信息。",
              "label": "GPS 和车速"
            },
            "zh-tw": {
              "tts": "應用程式可存取車輛的GPS和速度。",
              "label": "GPS和車速"
            }
          }
        },
        "Notifications": {
          "languages": {
            "de-de": {
              "tts": "Läuft die App im Hintergrund, kann Sie Benachrichtigungen senden.",
              "label": "Push-Benachrichtigungen"
            },
            "en-au": {
              "tts": "An app can send notifications when running in the background.",
              "label": "Push notifications"
            },
            "en-gb": {
              "tts": "An app can send notifications when running in the background.",
              "label": "Push notifications",
              "textBody": "An app can send notifications when running in the background."
            },
            "en-ie": {
              "tts": "An app can send notifications when running in the background.",
              "label": "Push notifications"
            },
            "en-us": {
              "tts": "An app can send notifications when running in the background.",
              "label": "Push Notifications",
              "textBody": "An app can send notifications when running in the background."
            },
            "es-en": {
              "tts": "Las aplicaciones pueden enviar notificaciones cuando se ejecutan en segundo plano.",
              "label": "Notificaciones tipo Push",
              "textBody": "Las aplicaciones pueden enviar notificaciones cuando se ejecutan en segundo plano."
            },
            "es-es": {
              "tts": "Una aplicación puede enviar notificaciones cuando se está ejecutando en segundo plano.",
              "label": "Notificaciones push"
            },
            "es-mx": {
              "tts": "Las aplicaciones pueden enviar notificaciones cuando se ejecutan en segundo plano.",
              "label": "Notificaciones tipo Push",
              "textBody": "Las aplicaciones pueden enviar notificaciones cuando se ejecutan en segundo plano."
            },
            "fr-ca": {
              "tts": "Une application peut envoyer des avis lorsqu’elle fonctionne en arrière-plan.",
              "label": "Notifications Instantanées",
              "textBody": "Une application peut envoyer des avis lorsqu’elle fonctionne en arrière-plan."
            },
            "fr-fr": {
              "tts": "Une application peut envoyer des avis lorsqu’elle fonctionne en arrière-plan.",
              "label": "Notifications push"
            },
            "it-it": {
              "tts": "Un'app può inviare notifiche se eseguita in background.",
              "label": "Notifiche push"
            },
            "nl-nl": {
              "tts": "Een app kan meldingen versturen als deze op de achtergrond actief is.",
              "label": "Push-meldingen"
            },
            "pl-pl": {
              "tts": "Aplikacja może wysyłać powiadomienia, działając w tle.",
              "label": "Powiadomienia Push"
            },
            "pt-br": {
              "tts": "Um aplicativo pode enviar notificações quando estiver sendo executado em segundo plano.",
              "label": "Notificações Push",
              "line1": "Notificações"
            },
            "pt-pt": {
              "tts": "Uma aplicação consegue enviar notificações quando está activa em segundo plano.",
              "label": "Notificações push"
            },
            "ru-ru": {
              "tts": "Если приложение работает в фоновом режиме, оно может отправлять оповещения.",
              "label": "Оповещения о пересылке"
            },
            "sv-se": {
              "tts": "Appen kan skicka meddelanden när den körs i bakgrunden.",
              "label": "Push-notiser"
            },
            "tr-tr": {
              "tts": "Bir uygulama arka planda çalışırken bildirim gönderebilir.",
              "label": "Anlık bildirimleri"
            },
            "zh-cn": {
              "tts": "移动应用程序在后台运行时可推送通知。",
              "label": "推送通知"
            },
            "zh-tw": {
              "tts": "車輛行進時，應用程式可在背景中傳送通知。",
              "label": "傳送通知"
            }
          }
        },
        "SettingAppPermissions": {
          "languages": {
            "en-us": {
              "textBody": "Change %AppName%’s functionality and use of data as described below. See App terms of service and privacy policies."
            },
            "es-mx": {
              "textBody": "Para cambiar la funcionalidad de %appName% y usar los datos como se describe más adelante. Consulte los términos de servicio y políticas de privacidad de la App."
            },
            "fr-ca": {
              "textBody": "Pour modifier la fonctionnalité de %appName% et l’usage des données comme décrit ci-dessous. Reportez-vous aux modalités de service et à la politique de confidentialité de l’application."
            }
          }
        },
        "SettingDisableUpdates": {
          "languages": {
            "de-de": {
              "line1": "Updates deakt."
            },
            "en-au": {
              "line1": "Disable updates"
            },
            "en-gb": {
              "line1": "Disable updates"
            },
            "en-ie": {
              "line1": "Disable updates"
            },
            "en-us": {
              "line1": "Disable Updates",
              "textBody": "Disable Updates"
            },
            "es-en": {
              "line1": "Deshab. actual.",
              "textBody": "Deshab. actual."
            },
            "es-es": {
              "line1": "Desact. actual."
            },
            "es-mx": {
              "line1": "Deshab. actual.",
              "textBody": "Deshab. actual."
            },
            "fr-ca": {
              "line1": "Désactiver MAJ",
              "textBody": "Désactiver MAJ"
            },
            "fr-fr": {
              "line1": "Désactiver màj"
            },
            "it-it": {
              "line1": "Disabilita agg."
            },
            "nl-nl": {
              "line1": "Upd. uitschak."
            },
            "pl-pl": {
              "line1": "Wyłącz aktual."
            },
            "pt-br": {
              "line1": "Desat. atualiz."
            },
            "pt-pt": {
              "line1": "Desact. actualiz."
            },
            "ru-ru": {
              "line1": "Откл. обновл."
            },
            "sv-se": {
              "line1": "Inaktivera uppd."
            },
            "tr-tr": {
              "line1": "Güncell. Kapat"
            },
            "zh-cn": {
              "line1": "禁用更新"
            },
            "zh-tw": {
              "line1": "停用更新"
            }
          }
        },
        "SettingEnableUpdates": {
          "languages": {
            "de-de": {
              "line1": "Apps aktivieren"
            },
            "en-au": {
              "line1": "Enable Apps"
            },
            "en-gb": {
              "line1": "Enable Apps"
            },
            "en-ie": {
              "line1": "Enable Apps"
            },
            "en-us": {
              "line1": "Enable Apps"
            },
            "es-en": {
              "line1": "Hab. aplic."
            },
            "es-es": {
              "line1": "Activar apl."
            },
            "es-mx": {
              "line1": "Hab. aplic."
            },
            "fr-ca": {
              "line1": "Activer app.",
              "textBody": "Activer app."
            },
            "fr-fr": {
              "line1": "Activer app."
            },
            "it-it": {
              "line1": "Abilita app"
            },
            "nl-nl": {
              "line1": "Apps inschak."
            },
            "pl-pl": {
              "line1": "Włącz aplikacje"
            },
            "pt-br": {
              "line1": "Ativar aplic."
            },
            "pt-pt": {
              "line1": "Activar actualiz."
            },
            "ru-ru": {
              "line1": "Вкл. прилож."
            },
            "sv-se": {
              "line1": "Aktivera appar"
            },
            "tr-tr": {
              "line1": "Uygulamaları aç"
            },
            "zh-cn": {
              "line1": "启用应用程序"
            },
            "zh-tw": {
              "line1": "啟用應用程式"
            }
          }
        },
        "SettingUpdateAuto": {
          "languages": {
            "de-de": {
              "line1": "Update anford."
            },
            "en-au": {
              "line1": "Request update"
            },
            "en-gb": {
              "line1": "Request update"
            },
            "en-ie": {
              "line1": "Request update"
            },
            "en-us": {
              "line1": "Request Update",
              "textBody": "Select `Update now` to receive app permissions for your SYNC-enabled mobile apps. This may enable additional functionality depending on the app and your settings. If your phone has a working data connection, an update should complete in less than 1 minute."
            },
            "es-en": {
              "line1": "Solicit. actualiz.",
              "textBody": "Solicit. actualiz."
            },
            "es-es": {
              "line1": "Solicitar actual."
            },
            "es-mx": {
              "line1": "Solicit. actualiz.",
              "textBody": "Solicit. actualiz."
            },
            "fr-ca": {
              "line1": "Demander MAJ",
              "textBody": "Demander MAJ"
            },
            "fr-fr": {
              "line1": "Demander màj"
            },
            "it-it": {
              "line1": "Rich. aggiorn."
            },
            "nl-nl": {
              "line1": "Upd. aanvragen"
            },
            "pl-pl": {
              "line1": "Zażądaj aktual."
            },
            "pt-br": {
              "line1": "Solicitar atualiz."
            },
            "pt-pt": {
              "line1": "Solicit. actualiz."
            },
            "ru-ru": {
              "line1": "Запрос на обн."
            },
            "sv-se": {
              "line1": "Begär uppdat."
            },
            "tr-tr": {
              "line1": "Güncelleme iste"
            },
            "zh-cn": {
              "line1": "请求更新"
            },
            "zh-tw": {
              "line1": "請求更新"
            }
          }
        },
        "StatusNeeded": {
          "languages": {
            "de-de": {
              "line1": "Update benötigt"
            },
            "en-au": {
              "line1": "Update needed"
            },
            "en-gb": {
              "line1": "Update needed",
              "textBody": "Update needed"
            },
            "en-ie": {
              "line1": "Update needed"
            },
            "en-us": {
              "line1": "Update Needed",
              "textBody": "Update Needed"
            },
            "es-en": {
              "line1": "Actualiz. neces.",
              "textBody": "Actualiz. neces."
            },
            "es-es": {
              "line1": "Actu. necesaria"
            },
            "es-mx": {
              "line1": "Actualiz. neces.",
              "textBody": "Actualiz. neces."
            },
            "fr-ca": {
              "line1": "Màj requise",
              "textBody": "Màj requise"
            },
            "fr-fr": {
              "line1": "Mise à jour requise"
            },
            "it-it": {
              "line1": "Necess. aggiorn."
            },
            "nl-nl": {
              "line1": "Update nodig"
            },
            "pl-pl": {
              "line1": "Potrzeba aktual."
            },
            "pt-br": {
              "line1": "Atualiz. necess."
            },
            "pt-pt": {
              "line1": "Actual. necess."
            },
            "ru-ru": {
              "line1": "Необх. обновл."
            },
            "sv-se": {
              "line1": "Uppdat. krävs"
            },
            "tr-tr": {
              "line1": "Güncellenmeli"
            },
            "zh-cn": {
              "line1": "需要进行更新"
            },
            "zh-tw": {
              "line1": "需更新"
            }
          }
        },
        "StatusPending": {
          "languages": {
            "de-de": {
              "line1": "Aktualisieren..."
            },
            "en-au": {
              "line1": "Updating..."
            },
            "en-gb": {
              "line1": "Updating...",
              "textBody": "Updating..."
            },
            "en-ie": {
              "line1": "Updating..."
            },
            "en-us": {
              "line1": "Updating...",
              "textBody": "Updating..."
            },
            "es-en": {
              "line1": "Actualizando...",
              "textBody": "Actualizando..."
            },
            "es-es": {
              "line1": "Actualizando..."
            },
            "es-mx": {
              "line1": "Actualizando...",
              "textBody": "Actualizando..."
            },
            "fr-ca": {
              "line1": "MAJ en cours...",
              "textBody": "MAJ en cours..."
            },
            "fr-fr": {
              "line1": "Màj en cours..."
            },
            "it-it": {
              "line1": "Aggiornamento"
            },
            "nl-nl": {
              "line1": "Updaten..."
            },
            "pl-pl": {
              "line1": "Aktualizowanie"
            },
            "pt-br": {
              "line1": "Atualizando..."
            },
            "pt-pt": {
              "line1": "A actualizar..."
            },
            "ru-ru": {
              "line1": "Обновление..."
            },
            "sv-se": {
              "line1": "Uppdaterar..."
            },
            "tr-tr": {
              "line1": "Güncelleniyor..."
            },
            "zh-cn": {
              "line1": "正在更新......"
            },
            "zh-tw": {
              "line1": "更新中..."
            }
          }
        },
        "StatusUpToDate": {
          "languages": {
            "de-de": {
              "line1": "Aktuelle Version"
            },
            "en-au": {
              "line1": "Up-to-date"
            },
            "en-gb": {
              "line1": "Up-to-date",
              "textBody": "Up-to-date"
            },
            "en-ie": {
              "line1": "Up-to-date"
            },
            "en-us": {
              "line1": "Up-To-Date",
              "textBody": "Up-To-Date"
            },
            "es-en": {
              "line1": "Actualizado",
              "textBody": "Actualizado"
            },
            "es-es": {
              "line1": "Actualizada"
            },
            "es-mx": {
              "line1": "Actualizado",
              "textBody": "Actualizado"
            },
            "fr-ca": {
              "line1": "Déjà à jour",
              "textBody": "Déjà à jour"
            },
            "fr-fr": {
              "line1": "Déjà à jour"
            },
            "it-it": {
              "line1": "più recente"
            },
            "nl-nl": {
              "line1": "Up-to-date"
            },
            "pl-pl": {
              "line1": "Aktualne"
            },
            "pt-br": {
              "line1": "Atualizado"
            },
            "pt-pt": {
              "line1": "Actualizado"
            },
            "ru-ru": {
              "line1": "Обновлено"
            },
            "sv-se": {
              "line1": "Uppdat. krävs ej"
            },
            "tr-tr": {
              "line1": "Güncel"
            },
            "zh-cn": {
              "line1": "最新更新"
            },
            "zh-tw": {
              "line1": "更新最新"
            }
          }
        },
        "VehicleInfo": {
          "languages": {
            "de-de": {
              "tts": "Eine App hat Zugriff auf die folgenden Fahrzeuginformationen: Kraftstoff-Füllstand, Kraftstoffverbrauch, Motordrehzahl, Kilometerzähler, FIN, Außentemperatur, Gangstellung, Reifenluftdruck.",
              "label": "Fahrzeuginformationen"
            },
            "en-au": {
              "tts": "An app can access the following vehicle information: Fuel level, Fuel economy, Engine RPMs, Odometer, VIN, Outside air temperature, Gear position, Tyre pressure.",
              "label": "Vehicle information"
            },
            "en-gb": {
              "tts": "An app can access the following vehicle information: Fuel level, Fuel economy, Engine RPMs, Odometer, VIN, Outside air temperature, Gear position, Tire pressure.",
              "label": "Vehicle information",
              "textBody": "An app can access the following vehicle information: Fuel level, Fuel economy, Engine RPMs, Odometer, VIN, Outside air temperature, Gear position, Tire pressure."
            },
            "en-ie": {
              "tts": "An app can access the following vehicle information: Fuel level, Fuel economy, Engine RPMs, Odometer, VIN, Outside air temperature, Gear position, Tyre pressure.",
              "label": "Vehicle information"
            },
            "en-us": {
              "tts": "An app can access the following vehicle information: Fuel Level, Fuel Economy, Odometer, VIN, External Temperature, Tire Pressure.",
              "label": "Vehicle Information",
              "textBody": "An app can access the following vehicle information: Fuel Level, Fuel Economy, Odometer, VIN, External Temperature, Tire Pressure."
            },
            "es-en": {
              "tts": "Las aplicaciones pueden acceder a la siguiente información del vehículo: Nivel de combustible, Economía de combustible, RPM del motor, Cuentakilómetros, Número de identificación del vehículo, Temperatura externa, Posición del cambio, Presión de los neumáticos.",
              "label": "Información del vehículo",
              "textBody": "Las aplicaciones pueden acceder a la siguiente información del vehículo: Nivel de combustible, Economía de combustible, RPM del motor, Cuentakilómetros, Número de identificación del vehículo, Temperatura externa, Posición del cambio, Presión de los neumáticos."
            },
            "es-es": {
              "tts": "Una aplicación puede acceder a la siguiente información del vehículo: Nivel de combustible, Ahorro de combustible, RPM del motor, Cuentakilómetros, VIN, Temperatura aire exterior, Marcha engranada, Presión de neumáticos.",
              "label": "Información del vehículo"
            },
            "es-mx": {
              "tts": "Las aplicaciones pueden acceder a la siguiente información del vehículo: Nivel de combustible, Economía de combustible, Cuentakilómetros, Número de identificación del vehículo, Temperatura externa, Presión de los neumáticos.",
              "label": "Información del Vehículo",
              "textBody": "Las aplicaciones pueden acceder a la siguiente información del vehículo: Nivel de combustible, Economía de combustible, Cuentakilómetros, Número de identificación del vehículo, Temperatura externa, Presión de los neumáticos."
            },
            "fr-ca": {
              "tts": "Une application peut accéder aux informations suivantes du véhicule: Niveau de carburant, Économie de carburant, Odomètre, NIV, Température extérieure, et Pression des pneus.",
              "label": "Renseignements du Véhicule",
              "textBody": "Une application peut accéder aux informations suivantes du véhicule: Niveau de carburant, Économie de carburant, Odomètre, NIV, Température extérieure, et Pression des pneus."
            },
            "fr-fr": {
              "tts": "Une application peut accéder aux informations suivantes du véhicule: Niveau de carburant, Économie de carburant, Vitesse de moteur, Compteur kilométrique, NIV, Température extérieure, Position de vitesse, Pression des pneus.",
              "label": "Renseignements du véhicule"
            },
            "it-it": {
              "tts": "Un'app può avere accesso alle seguenti informazioni del veicolo: Livello carburante, Consumi carburante, Numero giri motore, Contachilometri, VIN, Temperatura esterna, Posizione marcia, Pressione pneumatici.",
              "label": "Informazioni sul veicolo"
            },
            "nl-nl": {
              "tts": "Een app heeft toegang tot de volgende voertuiginformatie: Brandstofpeil, Brandstofverbruik, Motortoerental, Kilometerteller, VIN, Buitentemperatuur, Versnellingsstand, Bandenspanning.",
              "label": "Voertuiginformatie"
            },
            "pl-pl": {
              "tts": "Aplikacja może uzyskać dostęp do następujących informacji o pojeździe: Poziom paliwa, Zużycie paliwa, Obroty silnika, Licznik przebiegu, Numer VIN, Temperatura zewnętrzna, Aktualny bieg, Ciśnienie opon.",
              "label": "Informacje o pojeździe"
            },
            "pt-br": {
              "tts": "Um aplicativo pode acessar as seguintes informações sobre o veículo: Nível de combustível, Economia de combustível, RPM do motor, Hodômetro, VIN, Temperatura externa, Posição das marchas, Pressão dos pneus.",
              "label": "Informações sobre o veículo",
              "line1": "Inform. Veículo"
            },
            "pt-pt": {
              "tts": "Uma aplicação consegue aceder às seguintes informações do veículo: Nível de combustível, Poupança de combustível, RPM do motor, Conta-quilómetros, VIN, Temperatura exterior, Posição da mudança de velocidade, Pressão dos pneus.",
              "label": "Informações do veículo"
            },
            "ru-ru": {
              "tts": "Приложение имеет доступ к следующим данным автомобиля: Уровень топлива, Економия топлива, Число оборотов двигателя, Одометр, Номер VIN, Температура за бортом, Положение передачи, Давление шин.",
              "label": "Информация об автомобиле"
            },
            "sv-se": {
              "tts": "Appen kan komma åt följande fordonsinformation: Bränslenivå, Bränsleekonomi, Motorns varvtal, Vägmätare, VIN, Utetemperatur, Växelläge, Däcktryck.",
              "label": "Fordonsinformation"
            },
            "tr-tr": {
              "tts": "Bir uygulama şu araç bilgilerine erişebilir: Yakıt seviyesi, Yakıt ekonomisi, Motor devirleri, Kilometre sayacı, VIN, Dış sıcaklık, Vites konumu, Lastik basıncı.",
              "label": "Araç bilgisi"
            },
            "zh-cn": {
              "tts": "移动应用程序可访问下列车辆信息 ： 燃油量, 燃油经济性, 发动机转速(RPM), 里程表, VIN, 车外温度, 档位, 胎压.",
              "label": "车辆信息"
            },
            "zh-tw": {
              "tts": "一個應用程式可存取以下車輛資訊 : 燃油存量, 燃油經濟性, 引擎轉速, 里程表, 車輛識別號碼, 車外溫度, 檔位, 胎壓.",
              "label": "車輛資訊"
            }
          }
        }
      }
    },
    "app_policies": {
      "default": {
        "keep_context": false,
        "steal_focus": false,
        "priority": "NONE",
        "default_hmi": "NONE",
        "groups": [
          "Base-4"
        ]
      },
      "device": {
        "keep_context": false,
        "steal_focus": false,
        "priority": "NONE",
        "default_hmi": "NONE",
        "groups": [
          "DataConsent-2"
        ]
      },
      "pre_DataConsent": {
        "keep_context": false,
        "steal_focus": false,
        "priority": "NONE",
        "default_hmi": "NONE",
        "groups": [
          "BaseBeforeDataConsent"
        ]
      }
    }
  }
}];

//var sObject = JSON.stringify(jObject);
//console.log(sObject);

module.exports = { "data" : jObject};