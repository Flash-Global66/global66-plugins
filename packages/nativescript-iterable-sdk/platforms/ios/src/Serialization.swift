//
//  Serialization.swift
//  demo-iterable
//
//  Created by Gerson Carrasco on 21/03/24.
//

import Foundation
import IterableSDK

extension IterableConfig {
    static func from(dict: [AnyHashable: Any]?) -> IterableConfig {
        let config = IterableConfig()

        guard let dict = dict else {
            return config
        }

        if let allowedProtocols = dict["allowedProtocols"] as? [String] {
            config.allowedProtocols = allowedProtocols
        }

        if let pushIntegrationName = dict["pushIntegrationName"] as? String {
            config.pushIntegrationName = pushIntegrationName
        }

        if let autoPushRegistration = dict["autoPushRegistration"] as? Bool {
            config.autoPushRegistration = autoPushRegistration
        }

        if let inAppDisplayInterval = dict["inAppDisplayInterval"] as? Double {
            config.inAppDisplayInterval = inAppDisplayInterval
        }

        if let expiringAuthTokenRefreshPeriod = dict["expiringAuthTokenRefreshPeriod"] as? TimeInterval {
            config.expiringAuthTokenRefreshPeriod = expiringAuthTokenRefreshPeriod
        }

        if let logLevelNumber = dict["logLevel"] as? NSNumber {
            config.logDelegate = createLogDelegate(logLevelNumber: logLevelNumber)
        }

        if let useInMemoryStorageForInApp = dict["useInMemoryStorageForInApps"] as? Bool {
            config.useInMemoryStorageForInApps = useInMemoryStorageForInApp
        }

        if let dataRegion = dict["dataRegion"] as? NSNumber {
            switch dataRegion {
            case 0:
                config.dataRegion = IterableDataRegion.US
            case 1:
                config.dataRegion = IterableDataRegion.EU
            default:
                config.dataRegion = IterableDataRegion.US
            }
        }


        return config
    }

    private static func createLogDelegate(logLevelNumber: NSNumber) -> IterableLogDelegate {
        DefaultLogDelegate(minLogLevel: LogLevel.from(number: logLevelNumber))
    }
}

extension LogLevel {
    static func from(number: NSNumber) -> LogLevel {
        if let value = number as? Int {
            return LogLevel(rawValue: value) ?? .info
        } else {
            return .info
        }
    }
}
