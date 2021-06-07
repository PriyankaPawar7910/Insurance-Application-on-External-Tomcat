import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from 'src/common/policy';
import { URL } from 'src/url.constant';
@Injectable()
export class PolicyService {
    constructor(private httpClient: HttpClient) {

    }

    getAllPolicies(): Observable<Policy[]> {
        return this.httpClient.get<Policy[]>(URL.getAllPoliciesUrl);
    }

    getPolicy(id: number): Observable<Policy>{
        return this.httpClient.get<Policy>(`${URL.getPolicyUrl}/${id}`);
    }

    addPolicy(policyData): Observable<any>{
        return this.httpClient.post<any>(URL.addPolicyUrl, policyData);
    }
    removePolicy(policyData): Observable<Policy>{
      return this.httpClient.put<Policy>(URL.removePolicyUrl, policyData);

    }
    updatePolicy(policyData): Observable<any>{
        return this.httpClient.put<any>(URL.updatePolicyUrl, policyData);
    }

}
