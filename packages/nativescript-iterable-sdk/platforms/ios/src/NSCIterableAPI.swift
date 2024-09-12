//  NSCIterableAPI.swift
//  demo-iterable
//
//  Created by Gerson Carrasco on 21/03/24.

import Foundation
import IterableSDK
import UIKit

@objcMembers
class NSCIterableAPI: NSObject {

    public static func initialize(
        apiKey: String,
        config configDict: [AnyHashable: Any]
    ) {
        let iterableConfig = IterableConfig.from(dict: configDict)
        IterableAPI.initialize(apiKey: apiKey, config: iterableConfig)
    }

    public static func set(email: String) {
        IterableAPI.email = email
    }

    public static func getEmail() -> String {
        return IterableAPI.email!
    }

    public static func register(deviceToken: Data) {
        IterableAPI.register(token: deviceToken)
    }

    public static func disableDevice() {
        IterableAPI.disableDeviceForCurrentUser()
    }

    // Region track API
    public func track(event: String, dataField: [AnyHashable: Any]) {
        IterableAPI.track(event: event, dataFields: dataField)
    }
}

