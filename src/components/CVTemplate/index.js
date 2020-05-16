import React from "react";
import PropTypes from "prop-types";
import { Document, Page, View, Text, Image, Link } from "@react-pdf/renderer";

import styles from "./Styles";

function CVTemplate(props) {
  return (
    <Document>
      <Page style={styles.viewContainer} wrap>
        <View style={styles.wrapped}>
          {/* LEFT SECTION */}
          <View style={styles.section__left}>
            <View style={styles.section__left__card}>
              <Image
                style={styles.card__image}
                src="https://i.picsum.photos/id/100/100/100.jpg"
              />
              <Text
                style={{ fontWeight: "bold", fontSize: 13, marginTop: -14 }}
              >
                Le Dinh Trung
              </Text>

              <View style={styles.detail}>
                <Image style={styles.detail__icon} src="/images/place.png" />
                <Text style={styles.detail__content}>28/06/1999</Text>
              </View>

              <View style={styles.detail}>
                <Image style={styles.detail__icon} src="/images/date.png" />
                <Text style={styles.detail__content}>
                  88 Ngu A Ca, Tan Phu, HCM City
                </Text>
              </View>

              <View style={styles.rectangle}></View>

              <View style={styles.detail}>
                <Image style={styles.detail__icon} src="/images/phone.png" />
                <Text style={styles.detail__content}>034 282 0113</Text>
              </View>

              <View style={styles.detail}>
                <Image style={styles.detail__icon} src="/images/mail.png" />
                <Text style={styles.detail__content}>oo.nino113@gmail.com</Text>
              </View>

              <View style={styles.detail}>
                <Image style={styles.detail__icon} src="/images/linkedin.png" />
                <Text style={styles.detail__content}>
                  linkedin.com/in/le-d-trung-610891194/
                </Text>
              </View>

              <View style={styles.detail}>
                <Image style={styles.detail__icon} src="/images/facebook.png" />
                <Text style={styles.detail__content}>
                  facebook.com/nino2806/
                </Text>
              </View>
            </View>

            {/* Education start */}
            <View style={{ marginTop: 24 }}>
              <Text style={styles.title}>EDUCATION</Text>

              <Text style={styles.subtitle}>
                Bachelorof Arts, Accounting & Finance
              </Text>
              <Text style={styles.description}>
                City State University (2016 - 2020)
              </Text>

              <Text style={styles.subtitle}>
                Bachelorof Arts, Accounting & Finance
              </Text>
              <Text style={styles.description}>
                City State University (2014 - 2015)
              </Text>

              <Text style={styles.subtitle}>
                Bachelorof Arts, Accounting & Finance
              </Text>
              <Text style={styles.description}>
                City State University (2008 - 2009)
              </Text>
            </View>
            {/* Education end */}

            {/* Skill start */}
            <View style={{ marginTop: 12 }}>
              <Text style={styles.title}>SKILLS</Text>
              <View style={styles.detail}>
                <Text style={styles.detail__title}>Adobe Ilustrator</Text>
                <View style={styles.detail__level}>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.dot__solid}></View>
                </View>
              </View>

              <View style={styles.detail}>
                <Text style={styles.detail__title}>Python</Text>
                <View style={styles.detail__level}>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.dot__solid}></View>
                </View>
              </View>

              <View style={styles.detail}>
                <Text style={styles.detail__title}>SQL</Text>
                <View style={styles.detail__level}>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.dot__solid}></View>
                  <View style={styles.dot__solid}></View>
                </View>
              </View>

              <View style={styles.detail}>
                <Text style={styles.detail__title}>ReactJS</Text>
                <View style={styles.detail__level}>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.dot__solid}></View>
                  <View style={styles.dot__solid}></View>
                  <View style={styles.dot__solid}></View>
                  <View style={styles.dot__solid}></View>
                </View>
              </View>
            </View>
            {/* Skill end */}

            {/* Skill end */}
            {/* Language start */}
            <View style={{ marginTop: 12 }}>
              <Text style={styles.title}>Language</Text>
              <View style={styles.detail}>
                <Text style={styles.detail__title}>Adobe Ilustrator</Text>
                <View style={styles.detail__level}>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.dot__solid}></View>
                </View>
              </View>

              <View style={styles.detail}>
                <Text style={styles.detail__title}>Vietnamese</Text>
                <View style={styles.detail__level}>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.detail__level__dot}></View>
                  <View style={styles.dot__solid}></View>
                </View>
              </View>
            </View>
            {/* Language end */}
          </View>
          {/* END LEFT SECTION */}

          {/* RIGHT SECTION */}
          {/* Summary start */}
          <View style={styles.section__right}>
            <View>
              <Text style={styles.title}>summary</Text>
              <Text style={styles.content}>
                Industry expert in Structural Engineering with excellent
                understanding of Drilling and Exploration techniques, Geology,
                and mechanical equipment used in underground and open pit mining
                operations. Safety focused with analytical approach to using
                numerical simulations to predict the behavior of underground
                excavations. <Link>Link: www.abc.com</Link>
              </Text>
            </View>
            {/* Summary end */}

            {/* Experience start */}
            <View style={{ marginTop: 12 }}>
              <Text style={styles.title}>Experience</Text>
              <Text style={styles.subtitle}>Vice President of Sales</Text>
              <Text style={styles.description}>
                Johnson Company (2019 - Present)
              </Text>
              <Text style={styles.content}>
                Led 4 Country Managers to execute marketing programs in Europe,
                Asia, Latin America and Canada. Rolled out procedural and
                product training for the managers.
              </Text>
              <View style={styles.content__list}>
                <View style={styles.content__list__item} wrap>
                  <Image style={styles.item__icon} src="/images/dot.png" />
                  <Text style={styles.item__text}>
                    Launched new coronary stent in global markets, increasing
                    market share by 20% in Europe and Asia.
                  </Text>
                </View>
                <View style={styles.content__list__item} wrap>
                  <Image style={styles.item__icon} src="/images/dot.png" />
                  <Text style={styles.item__text}>
                    Orchestrated the execution of 4 competitive marketing
                    campaigns, growing market share by 14%.
                  </Text>
                </View>
              </View>

              <Text style={styles.subtitle}>Vice President of Sales</Text>
              <Text style={styles.description}>
                Johnson Company (2016 - 2017)
              </Text>
              <Text style={styles.content}>
                Led 4 Country Managers to execute marketing programs in Europe,
                Asia, Latin America and Canada. Rolled out procedural and
                product training for the managers.
              </Text>
              <View style={styles.content__list}>
                <View style={styles.content__list__item} wrap>
                  <Image style={styles.item__icon} src="/images/dot.png" />
                  <Text style={styles.item__text}>
                    Launched new coronary stent in global markets, increasing
                    market share by 20% in Europe and Asia.
                  </Text>
                </View>
                <View style={styles.content__list__item} wrap>
                  <Image style={styles.item__icon} src="/images/dot.png" />
                  <Text style={styles.item__text}>
                    Orchestrated the execution of 4 competitive marketing
                    campaigns, growing market share by 14%.
                  </Text>
                </View>
              </View>

              <Text style={styles.subtitle}>Vice President of Sales</Text>
              <Text style={styles.description}>
                Johnson Company (2016 - 2017)
              </Text>
              <Text style={styles.content}>
                Led 4 Country Managers to execute marketing programs in Europe,
                Asia, Latin America and Canada. Rolled out procedural and
                product training for the managers.
              </Text>
              <View style={styles.content__list}>
                <View style={styles.content__list__item} wrap>
                  <Image style={styles.item__icon} src="/images/dot.png" />
                  <Text style={styles.item__text}>
                    Launched new coronary stent in global markets, increasing
                    market share by 20% in Europe and Asia.
                  </Text>
                </View>
                <View style={styles.content__list__item} wrap>
                  <Image style={styles.item__icon} src="/images/dot.png" />
                  <Text style={styles.item__text}>
                    Orchestrated the execution of 4 competitive marketing
                    campaigns, growing market share by 14%.
                  </Text>
                </View>
              </View>
              {/* Experience end */}
            </View>
          </View>
          {/* END RIGHT SECTION */}
        </View>
      </Page>
    </Document>
  );
}

CVTemplate.propTypes = {};

export default CVTemplate;
