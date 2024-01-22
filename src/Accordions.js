import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./styles.module.css";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        {/* <img className={styles.chevron} src={chevronDown} alt="Chevron Down" /> */}
        <div className={styles.chevron}></div>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function Accordions() {
  return (
    <div className="container_accordion" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="When is the best time to exercise?" initialEntered>
          It is better to do yoga in the morning, on an empty stomach, so you will be energized for the whole day and will not think about the fact that you have something else to do.
          </AccordionItem>

          <AccordionItem header="How often to exercise and in what sequence?">
          If you are starting yoga for the first time, try doing one complex at least a couple times to see how you feel.
          </AccordionItem>

          <AccordionItem header="How to exercise during pregnancy?">
          Fire Breathing and excessive strain on the abdominal area must be avoided, so chakra exercises are not suitable as a practice during pregnancy.
          </AccordionItem>

          <AccordionItem header="Why does irritation occur?">
          The fact is that when you start exercising, you experience psychological resistance due to subconscious unwillingness to restructure your lifestyle, way of thinking and habits.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}