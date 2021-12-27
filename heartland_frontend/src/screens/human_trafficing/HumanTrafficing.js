import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../components/styled/Container.style";
import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { HumanTrafficingContainer } from "./HumanTrafficing.styles";

const HumanTrafficing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <HumanTrafficingContainer>
        <div className="h1-text">
          <h1>
            <br />
            <br />
            <span style={{ color: "#02a89e" }}>Human</span> <br />
            <br /> Trafficking
          </h1>
        </div>
        <div className="ht_text">
          <p>
            Dolore nulla incididunt enim occaecat velit duis eiusmod nostrud
            amet labore qui labore. Lorem anim sunt quis anim sunt ex ad enim
            fugiat. Tempor dolor cillum sint in culpa id aliquip ea laboris amet
            ipsum deserunt culpa cupidatat. Sit dolore mollit labore est id qui
            consequat. Dolore tempor tempor tempor amet officia quis consectetur
            dolore minim adipisicing duis amet consectetur proident. In duis
            fugiat duis ad commodo ad et eu aute ipsum mollit. Amet minim
            reprehenderit aliqua nulla officia eu ad commodo non in anim. Duis
            velit irure sit anim culpa laboris pariatur in ea. Pariatur sint ea
            anim officia magna consectetur aute laboris reprehenderit sunt ipsum
            ipsum. Amet deserunt irure eu sit occaecat sunt Lorem nostrud ad
            sint in cupidatat. Et id tempor exercitation duis irure et. Ut
            excepteur ad sunt incididunt duis consectetur. Et Lorem in sit
            dolore ullamco in eiusmod nostrud quis exercitation nisi. Anim irure
            ullamco ullamco id laboris ea tempor amet est id fugiat et.
            Voluptate exercitation veniam anim elit enim commodo commodo commodo
            ad. Ad nisi irure sit nostrud qui magna amet. Consectetur deserunt
            qui ad velit culpa deserunt ea culpa ad incididunt adipisicing.
            Excepteur irure ut eu mollit quis nostrud aliqua velit. Irure
            nostrud reprehenderit pariatur cillum. Qui qui velit duis dolore
            commodo cillum commodo mollit id excepteur cillum do veniam. Esse
            ullamco deserunt reprehenderit aliqua nostrud tempor commodo in.
            Lorem aliquip non voluptate mollit dolor aliquip ipsum excepteur
            ullamco reprehenderit. Deserunt officia ipsum qui proident
            reprehenderit non fugiat sunt enim. Aliquip magna magna exercitation
            aliqua. Qui est voluptate ad eiusmod dolore. Sunt incididunt enim ea
            in est reprehenderit sunt est incididunt et excepteur labore ea.
            Aliquip occaecat anim ullamco quis. Ullamco sunt nostrud mollit
            aliquip ipsum ut pariatur amet Lorem minim. Aliqua aliqua sit ea
            esse deserunt do ut mollit eiusmod dolor dolore. Est nostrud mollit
            nulla voluptate eiusmod laboris ex. Amet dolor eiusmod anim
            incididunt irure velit incididunt voluptate minim. Laboris sit
            dolore officia minim sit in laboris cupidatat sunt aliquip. Eiusmod
            do in enim ut aute cillum culpa duis nostrud et reprehenderit
            adipisicing. Eiusmod ipsum exercitation tempor nisi laboris. Eiusmod
            est velit occaecat commodo. In minim occaecat nulla minim. Irure
            excepteur minim tempor amet aliquip quis ullamco. Ullamco occaecat
            laboris ad et reprehenderit laboris ut cupidatat pariatur. Ad dolor
            voluptate ex sunt in non laborum laborum mollit eu sint. Cillum est
            ipsum ea nostrud incididunt. Officia magna elit aute consectetur
            irure deserunt duis amet irure. Occaecat officia tempor anim qui
            reprehenderit exercitation dolore officia. Cillum aliqua anim culpa
            nulla. Proident et adipisicing nulla dolore eiusmod dolor commodo eu
            consectetur id enim officia velit consequat. Excepteur eiusmod irure
            consequat veniam ea ipsum nostrud amet minim dolor. Nisi non labore
            esse minim tempor elit magna eu fugiat consequat ut consequat tempor
            magna. Nostrud adipisicing aliqua quis aliqua labore nulla labore
            occaecat nostrud ipsum fugiat officia cillum ex. Officia sint enim
            id irure laborum ex mollit est. Fugiat dolor deserunt eu eu
            cupidatat labore. Veniam ex ullamco sit labore dolor sunt minim
            nulla.
          </p>
        </div>
      </HumanTrafficingContainer>
    </Container>
  );
};

export default HumanTrafficing;
