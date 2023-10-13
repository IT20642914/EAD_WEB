package com.example.bookmyseatapp.managers;

import com.example.bookmyseatapp.models.createaccount.CreateAccountRequestBody;
import com.example.bookmyseatapp.models.createaccount.CreateAccountResponse;
import com.example.bookmyseatapp.models.createaccount.CreateAccountService;

import java.util.function.Consumer;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CreateAccountManager {
    private static CreateAccountManager singleton;
    private CreateAccountService createAccountService;

    public static CreateAccountManager getInstance() {
        if (singleton == null)
            singleton = new CreateAccountManager();

        return singleton;
    }

    private CreateAccountManager() {
        createAccountService = NetworkManager.getInstance().createService(CreateAccountService.class);
    }

    public boolean validateCredentials(String nic, String password, String email, String mobileNo) {
        if (nic == null || nic.length() == 0)
            return false;

        if (password == null || password.length() == 0)
            return false;

        if (email == null || email.length() == 0)
            return false;

        if (mobileNo == null || mobileNo.length() == 0)
            return false;

        return true;
    }

    public void createAccount(String nic, String password, String email, String mobileNo,
                              Consumer<CreateAccountResponse> onSuccess,
                              Consumer<String> onError) {
        if (!NetworkManager.getInstance().isNetworkAvailable()){
            onError.accept("No internet connectivity");
            return;
        }

        CreateAccountRequestBody body = new CreateAccountRequestBody(nic, password, email, mobileNo);
        createAccountService.createAccount(body)
                .enqueue(new Callback<CreateAccountResponse>() {
                    @Override
                    public void onResponse(Call<CreateAccountResponse> call, Response<CreateAccountResponse> response) {
                        if (response.body().success){
                            onSuccess.accept(response.body());
                        }
                        else{
                            onError.accept("NIC or password is incorrect");
                        }
                    }

                    @Override
                    public void onFailure(Call<CreateAccountResponse> call, Throwable t) {
                        onError.accept("Unknown error occurred while creating account");
                    }
                });

    }

}
