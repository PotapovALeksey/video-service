import ViewStore from './Views';
import DataStore from './Data';

class RootStore {
  constructor() {
    this.stores = {
      view: new ViewStore(this),
      data: new DataStore(this),
    };
  }
}

const rootStore = new RootStore();

export default rootStore;
