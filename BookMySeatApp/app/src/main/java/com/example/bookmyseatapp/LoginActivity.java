package com.example.bookmyseatapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.bookmyseatapp.managers.ContextManager;
import com.example.bookmyseatapp.managers.LoginManager;
import com.example.bookmyseatapp.models.logins.LoginResponse;

public class LoginActivity extends AppCompatActivity {

    EditText etNic;
    EditText etPassword;
    Button btnLogin;
    private LoginManager loginManager;

    TextView createNew;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        etNic = findViewById(R.id.etNic);
        etPassword = findViewById(R.id.etPassword);
        btnLogin = findViewById(R.id.btnLogin);
        createNew = findViewById(R.id.createNew);

        btnLogin.setOnClickListener(view -> login());

        ContextManager.getInstance().setApplicationContext(getApplicationContext());
        loginManager = LoginManager.getInstance();

        checkLoginState();

        createNew.setOnClickListener(view -> navigateToCreate());

    }

    private void login(){
        loginManager.login(
                etNic.getText().toString(),
                etPassword.getText().toString(),
                (response) -> handleLoginSuccessful(response),
                error -> handleLoginFailed(error));
    }

    private void handleLoginSuccessful(LoginResponse response){
        if(response.success) {
            Toast.makeText(this, "Login succesfull", Toast.LENGTH_LONG);
            loginManager.getInstance().setLoggedInState(true);
            checkLoginState();
        }
        else {
            handleLoginFailed("Login returned unsuccessful");
        }
    }


    private void handleLoginFailed(String error){
        Toast.makeText(this, error, Toast.LENGTH_LONG).show();
    }

    private void checkLoginState() {
        if (loginManager.getInstance().getIsLoggedIn()){
            showMainActivity();
        }
    }

    private void showMainActivity(){
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }

    void navigateToCreate() {
        Intent intent = new Intent(this, CreateAccountActivity.class);
        startActivity(intent);
        finish();
    }
}