import { observable, action, computed, toJS } from 'mobx';

class ViewStore {
  @observable openedMenu = false;
  @observable openedSidebar = false;
  @observable openedModal = false;

  @computed get isOpenedMenu() {
    return toJS(this.openedMenu);
  }
  @computed get isOpenedSidebar() {
    return toJS(this.openedSidebar);
  }
  @computed get isOpenedModal() {
    return toJS(this.openedModal);
  }

  @action.bound toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }
  /** toggle left sidebar */
  @action.bound toggleSidebar() {
    this.openedSidebar = !this.openedSidebar;
  }
  /** close left sidebar */ 
  @action.bound closeSidebar() {
    this.openedSidebar = false;
  }
  /** modal open*/
  @action.bound closeModal() {
    this.openedModal = false;
  }
  /** modal close*/
  @action.bound openModal() {
    this.openedModal = true;
  }
}

export default ViewStore;
