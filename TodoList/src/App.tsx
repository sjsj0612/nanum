import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import { 
  Header, 
  LearnMoreLinks, 
  Colors, 
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components';

const ScrollView = Styled.ScrollView`
  background-color = ${Colors.lighter};
`;

const Body = Styled.View`
  backgroud-color = ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionDescription = Styled.View`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = Styled.View`
  font-weight: 700;
`;

interface Props {}

const App = ({ }: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            {/* Section(1) */}
            <SectionContainer> 
              <SectionDescription>Step One</SectionDescription> 
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to change the screen and then 
                come back to see you edits.
              </SectionDescription>
            </SectionContainer>
            {/* Section(2) */}
            <SectionContainer>
              <SectionDescription>See Your Changes</SectionDescription>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            {/* Section(3) */}
            <SectionContainer>
              <SectionDescription>Debug</SectionDescription>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            {/* Section(4) */}
            <SectionContainer>
              <SectionDescription>Learn More</SectionDescription>
              <SectionDescription>
                Read the dosc to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
