import Foundation

@objcMembers
class IterableHelper: NSObject {
    func getToken(deviceToken: Data) -> String {
        return deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
    }
}