import React, { useState } from "react";
import { Card, Link, Banner, TextContainer } from "@shopify/polaris";
import { MobileAcceptMajor, CircleDisabledMajor } from "@shopify/polaris-icons";

interface PharmacyProps {
  pharmacy: {
    id: string;
    pharmacyName: string;
    booking: boolean;
    address: string;
    phone: string;
    website: string;
    lastUpdated: string;
  };
}

export function PharmacyContainer({ pharmacy }: PharmacyProps) {
  const [booking, setBooking] = useState(pharmacy.booking);
  const [lastUpdated, setlastUpdated] = useState(pharmacy.lastUpdated);

  const updatePharmacy = (availability: boolean) => {
    const time = new Date();
    setlastUpdated(time.toLocaleString());
    setBooking(availability);
  };

  const availabilityMarkup = () => {
    if (booking) {
      return (
        <Banner status="success">
          <p>
            <strong>Appointments available</strong> as of {lastUpdated}
          </p>
        </Banner>
      );
    }
    return (
      <Banner status="critical">
        <p>
          <strong>Appointments not available</strong> as of {lastUpdated}
        </p>
      </Banner>
    );
  };
  return (
    <section>
      <Card
        title={pharmacy.pharmacyName}
        sectioned
        primaryFooterAction={{
          content: "Report Availability",
          icon: MobileAcceptMajor,
          onAction: () => {
            updatePharmacy(true);
          },
        }}
        secondaryFooterActions={[
          {
            content: "Report No Availability",
            icon: CircleDisabledMajor,
            onAction: () => {
              updatePharmacy(false);
            },
          },
        ]}
      >
        <TextContainer>
          <Card.Section fullWidth>{availabilityMarkup()}</Card.Section>
          <Card.Section title="Store Info">
            <Card.Subsection>{pharmacy.address}</Card.Subsection>
            <Card.Subsection>
              {pharmacy.phone}
              <br />
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link url={pharmacy.website}>{pharmacy.website}</Link>
            </Card.Subsection>
          </Card.Section>
        </TextContainer>
      </Card>
      <br />
    </section>
  );
}
