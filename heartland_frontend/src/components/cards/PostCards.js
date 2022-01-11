import React from "react";
import { PostCard } from "../styled/cards/PostCard.style";

const PostCards = () => {
  const lessChar = (text) => {
    const { innerWidth: width } = window;
    let stg = "";
    if (width >= 1920) {
      stg = text.substring(0, 1400);
    } else if (width >= 1565) {
      stg = text.substring(0, 1145);
    } else if (width >= 1309) {
      stg = text.substring(0, 930);
    } else if (width >= 1069) {
      stg = text.substring(0, 754);
    } else if (width >= 1069) {
      stg = text.substring(0, 754);
    } else if (width >= 856) {
      stg = text.substring(0, 591);
    } else if (width >= 719) {
      stg = text.substring(0, 448);
    } else if (width >= 601) {
      stg = text.substring(0, 344);
    } else {
      stg = text.substring(0, 145);
    }

    return stg;
  };

  return (
    <PostCard>
      <div className="innerDiv">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1641542846280-28138f9053e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt=""
          />
        </div>
        <div className="contentDiv">
          <h2>title</h2>
          <h6>author - dd/mm/yyyy</h6>
          <p>
            {lessChar(
              "Do excepteur dolore sit qui voluptate commodo exercitation exercitation reprehenderit dolor id excepteur. Elit aliquip esse id Lorem mollit. Non consequat enim duis sit nisi nostrud aliqua reprehenderit non. Ex aliqua ut pariatur sit fugiat tempor mollit cupidatat.Est tempor laboris consectetur do. Nisi reprehenderit amet incididunt velit non deserunt do occaecat nisi culpa fugiat cillum et eu. Laborum ea quis do irure nostrud excepteur eiusmod occaecat magna anim cillum.Aute commodo dolore aute sit sint dolore velit aliqua et occaecat. Nisi sit proident anim sunt veniam pariatur sunt eiusmod fugiat velit. In aute proident deserunt enim deserunt in deserunt dolor excepteur dolore consequat. Esse qui est sint fugiat tempor consequat officia aute pariatur consequat.Consectetur commodo minim eiusmod anim duis anim duis occaecat commodo cupidatat. Cupidatat do fugiat aliquip duis Lorem in excepteur labore mollit duis ea. Pariatur pariatur duis do elit qui et. Anim adipisicing nulla dolor officia mollit sint deserunt elit do ipsum non ipsum voluptate. Amet enim pariatur eiusmod ex et laboris ad ut amet nisi incididunt in quis.Aliqua reprehenderit elit laborum ad reprehenderit. Non pariatur labore Lorem magna fugiat elit culpa consectetur anim ea ut id. Amet occaecat excepteur elit pariatur aute duis veniam. Anim sunt incididunt pariatur labore amet nostrud in proident. Et minim tempor excepteur nostrud ex sunt aliquip ea quis amet. In voluptate sit ipsum adipisicing dolore non cupidatat proident reprehenderit exercitation sint.Non nulla eiusmod excepteur aliquip ut ea velit non Lorem. Ullamco ullamco ipsum aute sit magna exercitation id minim tempor veniam ut nulla ad. Tempor fugiat culpa irure amet. Consequat mollit deserunt ullamco id nisi veniam aliquip eiusmod eu amet. Dolor exercitation et ullamco nulla ex. Qui commodo excepteur veniam officia occaecat pariatur est dolore non fugiat dolor. Commodo do aliquip amet mollit minim quis sit minim laboris cupidatat adipisicing reprehenderit dolore aliquip. Duis et anim eu reprehenderit aliquip esse quis non cupidatat in sit. Tempor et ipsum dolore aliquip occaecat ipsum excepteur elit et. Proident amet veniam ut sit elit exercitation aliqua eu adipisicing fugiat. Ad consectetur ut adipisicing deserunt. Quis amet dolore nisi nulla."
            )}
            ....
          </p>
        </div>
      </div>
    </PostCard>
  );
};

export default PostCards;
