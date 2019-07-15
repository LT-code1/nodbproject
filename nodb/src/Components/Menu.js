import React from 'react';

const Menu = (props) => {
    return (
      <article className="Menu"> 
        <section className="innerMenu">
          <h3>Menu items: </h3>
            <ol className="list1">
                {
                  props.menuList.map(mlist => {
                    return <li key={mlist.id}>{mlist.name}.....{mlist.price}</li> 
                  })
                }  
            </ol> 
        </section>
      </article>
    );
};

  export default Menu;

