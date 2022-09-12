import { HttpHeaders } from '@angular/common/http';
// import { UserModal } from './model/userModal';


export class AppSettings {

    public static httpOptions = {
        headers: new HttpHeaders({
            'authorization': 'admin',
            'Content-Type': 'application/json'
        })
    }

    public static httpOptionsText = {
        headers: new HttpHeaders({
            'authorization': 'admin',
            'Content-Type': 'text/plain'
        })
    }

    public static gameInstance: any;

    public static API_ENDPOINT = 'http://132.186.106.12:8081/application/';

    public static API_VALIDATE_USER = AppSettings.API_ENDPOINT + "login";
    public static API_GET_24_HR_OPC_DATA = AppSettings.API_ENDPOINT + "getHistoricalData";
    public static API_GET_USER_DATA = AppSettings.API_ENDPOINT + "getUserData";
    public static API_GET_ASSET_DATA = AppSettings.API_ENDPOINT + "getAssetModalData";
    public static API_GET_ALL_ASSETS_TAGS = AppSettings.API_ENDPOINT + "getAssetModalData";
    public static API_GET_ALL_OPC_TAGS = AppSettings.API_ENDPOINT + "getOPCTags";
    public static API_GET_LIVE_OPC_TAGS = AppSettings.API_ENDPOINT + "getLiveValues";
    public static API_GET_LAST_24_HOURS_OPC_TAGS = AppSettings.API_ENDPOINT + "getOPCTags";
    public static API_GET_LAST_WEEK_OPC_TAGS = AppSettings.API_ENDPOINT + "getOPCTags";
    public static SAVE_ASSET_OPC_TAG_DATA = AppSettings.API_ENDPOINT + "saveUserData";

    public static API_GET_USER_LIST = AppSettings.API_ENDPOINT + "getUsers";
    public static API_CREATE_USER = AppSettings.API_ENDPOINT + "createUser";
    public static API_DELETE_USER = AppSettings.API_ENDPOINT + "deleteUser";

    public static API_SAVE_SHARE_ASSET = AppSettings.API_ENDPOINT + "saveSharedUserData";
    public static API_GET_SHARE_ASSET = AppSettings.API_ENDPOINT + "getSharedUserData";

    public static API_SAVE_OPC_CONFIGURATION = AppSettings.API_ENDPOINT + "saveOPCDetails";
    public static API_GET_OPC_CONFIGURATION = AppSettings.API_ENDPOINT + "getOPConfiguration";
    public static API_RESET_OPC_CONFIGURATION = AppSettings.API_ENDPOINT + "resetOPCDetails";
    public static RESET_ASSET_OPC_TAG_DATA = AppSettings.API_ENDPOINT + "resetUserData";

    public static OPC_TAG_FILTER_LIVE = "live";
    public static OPC_TAG_FILTER_LAST_24_HOUR = "last24hour";
    public static OPC_TAG_FILTER_LAST_WEEK = "lastweek";

    public static API_GET_MODAL_DATA_TEMPLATE = AppSettings.API_ENDPOINT + "getModalDataTemplate";
    public static API_SET_MODAL_DATA_TEMPLATE_DATA = AppSettings.API_ENDPOINT + "setModalData";
    // public static userDetail: UserModal;
}