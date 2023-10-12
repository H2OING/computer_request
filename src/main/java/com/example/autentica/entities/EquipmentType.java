package com.example.autentica.entities;

public enum EquipmentType {
    Monitor("Monitor"),
    Keyboard("Keyboard"),
    Mouse("Mouse"),
    Laptop("Laptop"),
    Projector("Projector"),
    NetworkSwitch("Network Switch"),
    Router("Router"),
    ExternalHardDrive("External Hard Drive"),
    USBFlashDrive("USB Flash Drive"),
    Headset("Headset"),
    Webcam("Webcam"),
    UPS("UPS"),
    GraphicsCard("Graphics Card"),
    Motherboard("Motherboard"),
    CPU("CPU"),
    RAM("RAM"),
    HardDrive("Hard Drive"),
    SSD("SSD"),
    CDDVDDrive("CD/DVD Drive"),
    PowerSupply("Power Supply"),
    NetworkCable("Network Cable"),
    HDMICable("HDMI Cable"),
    VGACable("VGA Cable"),
    DVICable("DVI Cable"),
    EthernetAdapter("Ethernet Adapter"),
    WirelessAdapter("Wireless Adapter"),
    ComputerCase("Computer Case"),
    CoolingFan("Cooling Fan"),
    Microphone("Microphone");

    private final String displayName;

    EquipmentType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
