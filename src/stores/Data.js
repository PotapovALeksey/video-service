import { observable, action, computed, toJS, runInAction } from 'mobx';
import * as httpClient from '../middlewars/api';

class DataStore {
  @observable _topCategories = null;
  @observable _categories = null;
  @observable _featuredVideos = null;
  @observable _promotedVideo = null;
  @observable _latestVideos = null;
  @observable _topVideos = null;
  @observable _whatsNewVideos = null;
  @observable _freeVideos = null;
  @observable _popularVideos = null;
  @observable _gameVideos = null;
  @observable _kombatVideos = null;
  @observable _musicVideos = null;
  @observable _movieVideos = null;
  @observable _newsVideos = null;
  @observable _categoryID = {
    data: null,
    loaded: false,
  };
  @observable _categoryVideosAll = null;
  @observable _videoByID = {
    data: null,
    loaded: false,
  };

  @computed get topCategories() {
    return toJS(this._topCategories);
  }

  @computed get categories() {
    return toJS(this._categories);
  }

  @computed get featuredVideos() {
    return toJS(this._featuredVideos);
  }

  @computed get promotedVideo() {
    return toJS(this._promotedVideo);
  }

  @computed get topVideos() {
    return toJS(this._topVideos);
  }

  @computed get latestVideos() {
    return toJS(this._latestVideos);
  }

  @computed get whatsNewVideos() {
    return toJS(this._whatsNewVideos);
  }

  @computed get freeVideos() {
    return toJS(this._freeVideos);
  }

  @computed get popularVideos() {
    return toJS(this._popularVideos);
  }

  @computed get gameVideos() {
    return toJS(this._gameVideos);
  }

  @computed get kombatVideos() {
    return toJS(this._kombatVideos);
  }

  @computed get musicVideos() {
    return toJS(this._musicVideos);
  }

  @computed get movieVideos() {
    return toJS(this._movieVideos);
  }

  @computed get newsVideos() {
    return toJS(this._newsVideos);
  }
  /** CATEGORY VIDEO */
  @computed get categoryID() {
    return toJS(this._categoryID.data);
  }

  @computed get categoryIsLoaded() {
    return toJS(this._categoryID.loaded);
  }

  @computed get categoryVideosAll() {
    return toJS(this._categoryVideosAll);
  }

  @computed get videoByID() {
    return toJS(this._videoByID.data);
  }

  @computed get videoIsLoaded() {
    return toJS(this._videoByID.loaded);
  }

  /** clear all store */
  @action.bound
  clear = async () => {
    this._topCategories = null;
    this._categories = null;
    this._featuredVideos = null;
    this._promotedVideo = null;
    this._latestVideos = null;
    this._topVideos = null;
    this._whatsNewVideos = null;
    this._freeVideos = null;
    this._popularVideos = null;
    this._gameVideos = null;
    this._kombatVideos = null;
    this._musicVideos = null;
    this._movieVideos = null;
    this._newsVideos = null;
    this._categoryVideosAll = null;
    this._categoryID = {
      data: null,
      loaded: false,
    };
    this._videoByID = {
      data: null,
      loaded: false,
    };
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
  getFeaturedVideos = async () => {
    const { data } = await httpClient.getFeaturedVideos();

    runInAction(() => {
      this._featuredVideos = data;
    });
  };

  @action.bound
  getPromotedVideo = async () => {
    const { data } = await httpClient.getPromotedVideos();

    runInAction(() => {
      this._promotedVideo = data[0];
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
  getLatestVideos = async () => {
    const { data } = await httpClient.getLatestVideos();

    runInAction(() => {
      this._latestVideos = data;
    });
  };

  @action.bound
  getWhatsNewVideos = async () => {
    const { data } = await httpClient.getWhatsNewVideos();

    runInAction(() => {
      this._whatsNewVideos = data;
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
      this._popularVideos = data;
    });
  };

  @action.bound
  getGameVideos = async () => {
    const { data } = await httpClient.getGameVideos();

    runInAction(() => {
      this._gameVideos = data;
    });
  };

  @action.bound
  getKombatVideos = async () => {
    const { data } = await httpClient.getKombatVideos();

    runInAction(() => {
      this._kombatVideos = data;
    });
  };

  @action.bound
  getMusicVideos = async () => {
    const { data } = await httpClient.getMusicVideos();

    runInAction(() => {
      this._musicVideos = data;
    });
  };

  @action.bound
  getMovieVideos = async () => {
    const { data } = await httpClient.getMovieVideos();

    runInAction(() => {
      this._movieVideos = data;
    });
  };

  @action.bound
  getNewsVideos = async () => {
    const { data } = await httpClient.getNewsVideos();

    runInAction(() => {
      this._newsVideos = data;
    });
  };

  @action.bound
  getCategoryID = async (category, page, limit = 12) => {
    const { data } = await httpClient.getCategoryID(category, page, limit);

    runInAction(() => {
      this._categoryID.data = data;
      this._categoryID.loaded = false;
    });
  };

  @action.bound
  getCategoryAddLoading = async (category, page) => {
    const { data } = await httpClient.getCategoryID(category, page);

    runInAction(() => {
      this._categoryID.data = [...this._categoryID.data, ...data];
    });
  };

  @action.bound
  toggleLoadedCategory = async () => {
    runInAction(() => {
      this._categoryID.loaded = !this._categoryID.loaded;
    });
  };

  @action.bound
  getCategoryVideosAll = async () => {
    const { data } = await httpClient.getCategoryVideosAll();

    runInAction(() => {
      this._categoryVideosAll = data;
    });
  };

  @action.bound
  getVideoByID = async id => {
    const { data } = await httpClient.getVideoID(id);

    runInAction(() => {
      this._videoByID.data = data;
      this._videoByID.loaded = false;
    });
  };

  @action.bound
  toggleLoadedVideo = async () => {

    runInAction(() => {
      this._videoByID.loaded = !this._videoByID.loaded;
    });
  };

  /** GET data "Home" page */
  @action.bound
  handleGetHomePage = async () => {
    this.getCategories();
  };

  /** GET data "Category" page */
  @action.bound
  handleGetCategoryPage = async (category, page, limit) => {
    this.getCategories();
    // body categories page
    this.getCategoryID(category,page,limit);
  };

  /** GET data "Video" page */
  @action.bound
  handleGetVideoPage = async id => {
    this.getCategories();

    this.getVideoByID(id);
  };
}

export default DataStore;
