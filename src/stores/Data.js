import { observable, action, computed, toJS } from 'mobx';
import * as httpClient from '../middlewars/api';

class Store {
  @observable categoriesItems = null;

  @computed get categories() {
    return toJS(this.categoriesItems);
  }

  @action.bound getCategories = () => {
    httpClient.getCategories().then(response => {
      console.log('store', response.data);
      this.setValue('categoriesItems', response.data);
    });
  };

  @action setValue = (value, data) => (this[value] = data);
}

const DataStore = new Store();

export default DataStore;
