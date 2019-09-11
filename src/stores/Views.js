import { observable, action, computed, toJS } from 'mobx';

class ViewStore {
  @observable openedMenu = false;
  @observable openedSidebar = false;

  @computed get isOpenedMenu() {
    return toJS(this.openedMenu);
  }
  @computed get isOpenedSidebar() {
    return toJS(this.openedSidebar);
  }

  @action.bound toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }
  @action.bound toggleSidebar() {
    this.openedSidebar = !this.openedSidebar;
  }
}

export default ViewStore;
