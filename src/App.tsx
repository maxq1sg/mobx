import React, { useEffect } from "react";
import TodoList from "./TodoList";
import Comments from "./Comments";
import Modal from "./Modal";
import styled from "styled-components";
const Content = styled.div`
  flex: 1 0;
`;
const Navbar = styled.nav`
  background: blue;
  flex: 40px 0 1;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);
  const [state, setState] = React.useState("");
  return (
    <FlexWrapper>
      <Navbar></Navbar>
      <Content>
        <TodoList />
        <hr />
        <Comments />
        <hr />
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          minus consequatur quae id vitae praesentium, voluptatem nemo tenetur
          molestiae iure in placeat? Similique, molestias porro cum deserunt nam
          quia amet at quibusdam, ut dolor id veritatis recusandae temporibus.
          Tempore dicta laudantium tempora est aspernatur fugiat itaque qui
          explicabo blanditiis nisi in totam neque, repellat dolores culpa.
          Incidunt omnis dolore quam facilis, cum maxime a. Repellendus cumque
          itaque dignissimos veritatis. Architecto, optio ad sequi ratione vel
          quae deserunt quos eveniet facilis nam animi. Expedita facere esse aut
          quis fugit quia vero eius pariatur doloribus, necessitatibus
          asperiores repellat est cum at, odit laborum! Cumque quam sapiente
          pariatur placeat eum vel asperiores exercitationem. Quasi odit fugit
          facilis recusandae, est reiciendis doloremque illum? A, quos. Est
          adipisci tempora repellat sed nostrum reiciendis deleniti aperiam
          quidem eum velit magni dolore reprehenderit unde illo assumenda
          voluptatem corrupti sunt consequuntur natus, vero earum? Non corporis
          recusandae velit quos! Eligendi distinctio fuga quibusdam nemo
          sapiente. Magnam corporis minus neque accusamus, provident corrupti
          architecto perspiciatis quidem omnis nisi repudiandae eius explicabo,
          quo nesciunt, iste et doloribus necessitatibus! Molestias tenetur
          dolores incidunt odit quidem deleniti debitis perferendis corrupti
          qui! Mollitia, quis reiciendis explicabo qui sapiente, vero libero,
          laudantium itaque aliquid cupiditate modi ipsa aspernatur veniam amet
          doloribus. Animi doloribus eligendi vel commodi, ex dignissimos
          eveniet quae deserunt. Asperiores ratione enim, eum est praesentium
          unde officiis ipsum in, amet ducimus, necessitatibus repellendus
          facere porro velit sunt fuga ipsa ad ab laudantium dicta delectus quas
          quod perspiciatis. Iure ratione aliquid ad sint libero dolor ullam
          alias itaque quibusdam perferendis! Ducimus iusto deleniti totam ab,
          qui nesciunt rerum ad facilis perspiciatis? Iure, facilis ipsa
          officia, esse repudiandae placeat nihil itaque fuga non blanditiis
          amet ipsum adipisci cumque consectetur qui. Tempora laboriosam
          dignissimos corporis laborum, praesentium placeat fugit. Voluptatum
          inventore temporibus quis. Ratione nostrum, ipsa consequuntur repellat
          molestiae temporibus reprehenderit minima quidem magnam odio deserunt
          doloremque ipsam ea perspiciatis distinctio quasi voluptatibus, earum
          quis fugiat! Eum est totam accusantium id harum. Sapiente rerum,
          nesciunt hic mollitia voluptatibus consequuntur, consequatur molestias
          quam exercitationem ipsum quos tenetur saepe nemo ex recusandae,
          incidunt id! Officia unde velit, alias omnis sit officiis voluptatum
          blanditiis culpa illo distinctio, labore vel assumenda perferendis
          nihil architecto, incidunt autem error! Sunt dicta ad autem ipsum
          iusto doloremque veritatis soluta cupiditate ullam doloribus officiis
          delectus corrupti, enim iure dolorem magni aperiam voluptatibus
          recusandae nesciunt expedita ea veniam perferendis! Obcaecati harum
          suscipit voluptatem ad, magnam porro saepe alias! Itaque rerum
          reiciendis dolor unde temporibus! Quos eos laborum velit numquam sed
          accusamus nobis ullam fugit. Reprehenderit, nobis in maiores
          perspiciatis, incidunt voluptate qui voluptatibus accusamus, ad error
          dolor illo quos? Tempora, assumenda harum? Et officiis non itaque
          dolor maxime voluptates accusamus quibusdam assumenda eius harum
          inventore perspiciatis, sunt nam tempore fugit veritatis vitae facilis
          explicabo aliquam! At, libero laudantium cupiditate possimus quisquam
          earum enim odio praesentium tempora, cum esse. Minima necessitatibus
          reprehenderit, in, rem soluta minus atque quaerat placeat natus enim
          facilis corporis omnis praesentium id aut rerum deleniti illo?
          Reiciendis, excepturi deserunt! Expedita sapiente illum nostrum
          quibusdam natus temporibus quas! Deleniti eveniet excepturi laboriosam
          ducimus aspernatur, esse, ipsa veritatis veniam magnam cum impedit
          dignissimos. Nulla recusandae eveniet fuga illum porro. Dolor ipsum
          provident vitae nulla. Voluptatum voluptate voluptates, labore at ab
          quibusdam maxime sint, accusamus ipsum sunt perspiciatis earum nemo
          blanditiis quidem. Vitae, quasi doloribus. Accusamus, ipsa. Adipisci
          quas iste dolorem. Dolor, tenetur. Iure in nemo consequuntur harum
          dolor voluptatem, ab voluptates error earum minus aliquam commodi nam
          vel quisquam natus esse culpa ipsum corrupti sed ipsa doloribus
          eligendi iusto. Iure corrupti dicta voluptatem rem? Sint, quae nulla
          culpa impedit delectus obcaecati harum minus voluptatum labore?
          Placeat, aliquid labore eius similique, eligendi minus natus ducimus
          adipisci reiciendis temporibus voluptas corporis laborum quae
          necessitatibus! Fuga tempore delectus quae consectetur praesentium.
          Incidunt deleniti eaque ipsum eos expedita earum id totam fuga modi,
          nostrum suscipit? Suscipit, autem voluptate. Vero expedita iusto
          voluptate cupiditate sapiente voluptatem repellat est vel corporis
          atque, perspiciatis fuga iure corrupti repudiandae ullam! Incidunt
          quos eaque, at, excepturi, odio adipisci doloremque architecto fuga
          tempora iure reiciendis facere porro sapiente magnam cumque
          consequuntur doloribus quidem iusto! Exercitationem accusamus dolores,
          repellat dolorum aut est pariatur, odio consequuntur quia velit
          laboriosam voluptatem nam? Quam ullam doloremque corrupti veritatis
          amet velit voluptas minus vitae, dolor doloribus. Iste magnam tempora
          sint vel quo modi, vero quis id quas ad enim autem sequi perspiciatis
          at molestiae obcaecati illo laborum nesciunt libero nemo minima illum
          nostrum. Inventore similique, voluptatum laboriosam sint nihil fugiat
          quidem accusamus fuga placeat suscipit pariatur facere sunt
          consequuntur doloremque. Deleniti quia, illo beatae incidunt inventore
          perspiciatis omnis facere provident aspernatur eligendi at atque sed,
          harum architecto laudantium, accusantium amet delectus! Eveniet
          itaque, laborum, incidunt explicabo eum esse molestias quidem aliquid
          reprehenderit voluptates quisquam? Veniam aperiam, a, pariatur rerum
          impedit aliquid reprehenderit non amet perspiciatis adipisci optio
          provident vero nisi doloribus nulla error aspernatur libero asperiores
          placeat nesciunt quibusdam fuga esse debitis dolores! Esse rem
          mollitia sunt consequatur animi eum ipsum provident veritatis. Quidem
          voluptatum commodi quasi alias ut ex non, similique est quis maiores
          maxime error temporibus molestiae, suscipit a? Et sequi ipsa incidunt!
          Commodi at animi labore, natus optio voluptatibus! Amet qui ex velit
          temporibus quod nisi. Quia ex voluptas a itaque sint ab, dolor ipsa
          illo provident quaerat dolore omnis iusto, earum officia laborum
          voluptatem recusandae consectetur. Dolorum illum corrupti repudiandae
          voluptatum animi, non optio assumenda? Explicabo ullam quis totam
          consequuntur inventore velit. Harum minima voluptatibus maiores neque.
          Autem consectetur ullam fugit modi, itaque incidunt. Blanditiis, sint
          hic nemo quo id ad placeat incidunt soluta fugit animi quisquam
          assumenda alias obcaecati sunt quam facilis harum iusto reiciendis?
          Porro ipsa repudiandae illo beatae possimus in vel, ad voluptas
          aliquid ut et consequatur odio maxime deleniti eos deserunt sit!
          Cumque nisi sed quis pariatur sapiente. Veniam doloremque dicta quae
          excepturi quo libero minima cupiditate tempora iusto corporis! Enim
          delectus veniam minima exercitationem rerum quo in, modi itaque
          voluptas natus eveniet totam! Aut officiis molestiae hic aperiam quod
          natus sapiente ipsum id unde nisi error reprehenderit, eveniet
          perferendis!
        </main>
      </Content>
    </FlexWrapper>
  );
}

export default App;
