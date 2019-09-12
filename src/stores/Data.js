import { observable, action, computed, toJS, runInAction } from 'mobx';
import * as httpClient from '../middlewars/api';

class DataStore {
  @observable _topCategories = null;
  @observable _categories = null;
  @observable _featureds = null;
  @observable _promoted = null;
  @observable _latests = null;
  @observable _topVideos = null;
  @observable _whatsNew = null;
  @observable _freeVideos = null;
  @observable _populars = null;

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

  @computed get whatsNew() {
    return toJS(this._whatsNew);
  }

  @computed get freeVideos() {
    return toJS(this._freeVideos);
  }

  @computed get populars() {
    return toJS(this._populars);
  }

  @action.bound
  clear = async () => {
    this._topCategories = null;
    this._categories = null;
    this._featureds = null;
    this._promoted = null;
    this._latests = null;
    this._topVideos = null;
    this._whatsNew = null;
    this._freeVideos = null;
    this._populars = null;
  };

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
      this._featureds = data;
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

  @action.bound
  getWhatsNew = async () => {
    const { data } = await httpClient.getWhatsNew();

    runInAction(() => {
      this._whatsNew = data;
    });
  };

  @action.bound
  getFreeVideos = async () => {
    const { data } = await httpClient.getFreeVideos();

    runInAction(() => {
      this._freeVideos = data;
    });
  };

  @action.bound
  getPopularVideos = async () => {
    const { data } = await httpClient.getPopularVideos();

    runInAction(() => {
      this._populars = data;
    });
  };
}

export default DataStore;
