package com.example.bookmyseatapp.models.createaccount;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface CreateAccountService {
    @POST("Traveler")
    Call<CreateAccountResponse> createAccount(
            @Body CreateAccountRequestBody request);

}
