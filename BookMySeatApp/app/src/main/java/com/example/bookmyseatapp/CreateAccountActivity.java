package com.example.bookmyseatapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.bookmyseatapp.managers.ContextManager;
import com.example.bookmyseatapp.managers.CreateAccountManager;

public class CreateAccountActivity extends AppCompatActivity {

    EditText etNic;
    EditText etPassword;

    EditText etEmail;

    EditText etMobileNo;

    Button btnCreateAccount;

    private CreateAccountManager createAccountManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_account);

        etNic = findViewById(R.id.etNic);
        etPassword = findViewById(R.id.etPassword);
        etEmail = findViewById(R.id.etEmail);
        etMobileNo = findViewById(R.id.etMobileNo);
        btnCreateAccount = findViewById(R.id.btnCreateAccount);

        btnCreateAccount.setOnClickListener((view -> createAccount()));

        ContextManager.getInstance().setApplicationContext(getApplicationContext());
        createAccountManager = CreateAccountManager.getInstance();

    }

    public void createAccount() {
        createAccountManager.createAccount(etNic.getText().toString(),
                etPassword.getText().toString(),
                etMobileNo.getText().toString(),
                etEmail.getText().toString(), (response) -> handleCreateSuccessful(),
                error -> handleCreateFailed(error));
    }

    private void handleCreateSuccessful() {
        showHomeActivity();
    }

    private void handleCreateFailed(String error) {
        Toast.makeText(this, error, Toast.LENGTH_LONG).show();
    }

    private void showHomeActivity() {
        Intent intent = new Intent(this, HomeScreenActivity.class);
        startActivity(intent);
        finish();
    }
}