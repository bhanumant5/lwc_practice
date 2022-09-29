import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import WEBSITE_FIELD from "@salesforce/schema/Account.Website";

export default class Day_2 extends LightningElement {
   abs= ACCOUNT_OBJECT;
   myFields=[NAME_FIELD, PHONE_FIELD, INDUSTRY_FIELD,WEBSITE_FIELD];
}