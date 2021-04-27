import { Layout, Page, TextStyle, Card, Icon, Stack } from "@shopify/polaris";
import React from "react";
import {
  CircleTickMajorMonotone,
  MobileCancelMajorMonotone
} from '@shopify/polaris-icons';
import {PharmacyList} from '../PharmacyList';

function Home() {
  return (
  <Layout>
    <Layout.Section>
      <Page>
        <TextStyle variation="subdued">
          Here's what's happening with vaccinations in Ottawa
        </TextStyle>
        <br />
        <br />
        <PharmacyList /> 
        {/* <Card title = "Stittsville IDA" sectioned
        primaryFooterAction={{content:"Report Availability"}}
        secondaryFooterActions={[
          {content: "Report No Availability"}
        ]}>
          <Card.Section>
            <Stack>
              <Icon
                source={CircleTickMajorMonotone}
                color="green" 
              />
              <p><strong>Appointments available</strong> for tomorrow as of 6:13PM</p>
            </Stack>
          </Card.Section>
          <Card.Section title="Store Info">
            <Card.Subsection>
              250 Stittsville Main St.
              <br />
              Stittsville, ON
              <br />
              K2S 1S9
            </Card.Subsection>
            <Card.Subsection>
              613-835-3881
              <br />
              https://idapharmacy.com/
            </Card.Subsection>
          </Card.Section>
          
        </Card>
        <Card title = "Costco Kanata" sectioned
        primaryFooterAction={{content:"Report Availability"}}
        secondaryFooterActions={[
          {content: "Report No Availability"}
        ]}>
          <Card.Section>
            <Stack>
              <Icon
                source={MobileCancelMajorMonotone}
                color="red" 
              />
              <p><strong>No Appointments</strong> as of 6:02PM</p>
            </Stack>
          </Card.Section>
          <Card.Section title="Store Info">
            <Card.Subsection>
              770 Silver Seven Road
              <br />
              Ottawa, ON
              <br />
              K2V 0A1
            </Card.Subsection>
            <Card.Subsection>
              613-270-5500
              <br />
              https://www.costcopharmacy.ca/appointment
            </Card.Subsection>
          </Card.Section>
          
        </Card> */}
      </Page>
    </Layout.Section>
  </Layout>
  );
}

export default Home;
