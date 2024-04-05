<?xml version="1.0" encoding="ISO-8859-1"?>
<xsd:schema xmlns:xsd=" http://www.w3.org/2001/XMLSchema">

    <xsd:complexType name="Multiletter">
        <xsd:sequence>
            <xsd:element ref="letter"     maxOccurs="unbounded"/>
        </xsd:sequence>
    </xsd:complexType>

    <xsd:complexType name="letterType">
        <xsd:sequence>
            <xsd:element ref="name"/>
            <xsd:element ref="street"/>
        </xsd:sequence>
    </xsd:complexType>

    <xsd:element name="letter"     type="letterType"/>
    <xsd:element name="example"    type="Multiletter"/>
    <xsd:element name="name"   type="xsd:string"/>
    <xsd:element name="street"     type="xsd:string"/>

</xsd:schema>


