import { observable, action, computed, toJS, runInAction } from 'mobx';
import * as httpClient from '../middlewars/api';

class DataStore {
  @observable _topCategories = null;
  @observable _categories = null;
  @observable _featureds = null;
  @observable _promoted = null;
  @observable _latests = null;
  @observable _topVideos = null;

  @computed get topCategories() {
    return toJS(this._topCategories);
  }

  @computed get categories() {
    return toJS(this._categories);
  }

  @computed get featureds() {
    return toJS(this._featureds);
  }

  @computed get promoted() {
    return toJS(this._promoted);
  }

  @computed get topVideos() {
    return toJS(this._topVideos);
  }

  @computed get latests() {
    return toJS(this._latests);
  }

  @action.bound
  getTopCategories = async () => {
    const { data } = await httpClient.getTopCategories();

    runInAction(() => {
      this._topCategories = data;
    });
  };

  @action.bound
  getCategories = async () => {
    const { data } = await httpClient.getCategories();

    runInAction(() => {
      this._categories = data;
    });
  };

  @action.bound
  getFeatureds = async () => {
    const { data } = await httpClient.getFeatureds();

    runInAction(() => {
      this._categories = data;
    });
  };

  @action.bound
  getPromoted = async () => {
    const { data } = await httpClient.getPromoted();

    runInAction(() => {
      this._promoted = data[0];
    });
  };

  @action.bound
  getTopVideos = async () => {
    const { data } = await httpClient.getTopVideos();

    runInAction(() => {
      this._topVideos = data;
    });
  };

  @action.bound
  getLatests = async () => {
    const { data } = await httpClient.getLatests();

    runInAction(() => {
      this._latests = data;
    });
  };
}

export default DataStore;
