import { observable, action, computed, toJS } from 'mobx';

class Store {
  @observable openedMenu = false;
  @observable openedSidebar = false;

  @computed get isOpenedMenu() {
    return toJS(this.openedMenu);
  }
  @computed get isOpenedSidebar() {
    return toJS(this.openedSidebar);
  }

  @action toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }
  @action toggleSidebar() {
    this.openedSidebar = !this.openedSidebar;
  }
}

const ViewStore = new Store();

export default ViewStore;
