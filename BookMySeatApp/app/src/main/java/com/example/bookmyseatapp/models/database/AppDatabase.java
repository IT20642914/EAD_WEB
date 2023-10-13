package com.example.bookmyseatapp.models.database;

import androidx.room.Database;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverters;

import com.example.bookmyseatapp.utilities.DatabaseTypeConverters;

//@Database(version = 0)
@TypeConverters({DatabaseTypeConverters.class})
public abstract class AppDatabase extends RoomDatabase {
}

