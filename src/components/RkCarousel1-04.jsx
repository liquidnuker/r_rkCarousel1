// use export default for async wrap
// import {store} from "../js/store.js";

function PrevButton(props) {
  return (
    <span className="rkCarousel104_previous" onClick={props.pr_onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="rkCarousel104_chevron">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    </span>
  );
}

function NextButton(props) {
  return (
    <span className="rkCarousel104_next" onClick={props.pr_onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="rkCarousel104_chevron">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
    </span>
  );
}

export default class RkCarousel104 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
      {
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
      }, 
      {
        itemName: "item2",
        description: "desc2",
        imgSrc: "",
        isActive: false
      }, 
      {
        itemName: "item3",
        description: "desc3",
        imgSrc: "",
        isActive: false
      }],
      cIndex: 0,
      activePageButton: 0,
    };

    // binders
  }

  // lifecycle hooks
  
  // methods
  nextItem() {
    this.state.cIndex = this.state.cIndex + 1;
    this.state.cIndex = this.state.cIndex % this.state.items.length; // go to first
    
    this.setActivePageButton(this.state.cIndex);
  }

  prevItem() {
    if (this.state.cIndex === 0) {
      this.state.cIndex = this.state.items.length; // go to last
    }
    this.state.cIndex = this.state.cIndex - 1;
    
    this.setActivePageButton(this.state.cIndex);
  }

  customPage(index) {
    this.state.cIndex = index;
    this.setActivePageButton(index);
  }

  setActivePageButton(index) {
    this.state.items[index].isActive = true;

    if (this.state.activePageButton !== index) {
      this.state.items[this.state.activePageButton].isActive = false;

      // set current activePageButton
      this.state.activePageButton = index;
    }

    this.refresh();
  }

  refresh() {
    this.setState(prevState => ({
      cIndex: this.state.cIndex
    }));
  }
  
  render() {
    const items = this.state.items;
    const isActive = this.state.isActive;

    return (
      <div className="rkCarousel104">
      <div className="rkCarousel104_content">
      {items[this.state.cIndex].itemName}<br />
      <div className="rkCarousel104_description">
        {items[this.state.cIndex].description}
      </div>
      </div>

      <nav className="rkCarousel104_pagination">
      {items.map((i, index) =>
        <div className={ items[index].isActive 
          ? 'rkCarousel104_pagebuttons rkCarousel104_active': 'rkCarousel104_pagebuttons' } 
          onClick={() => { this.customPage(index) }}>
          </div>
          )}
      </nav>

      <div className="row rkCarousel104_prevnext">
      <PrevButton pr_onClick={() => { this.prevItem() }} />
      <NextButton pr_onClick={() => { this.nextItem() }} />
      </div>
      </div>
    );
  }
}