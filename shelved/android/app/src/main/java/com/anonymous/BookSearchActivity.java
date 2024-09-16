import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.view.View;
//java API call ref: https://rapidapi.com/guides/make-api-call-java
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;

public class BookSearchActivity extends AppCompatActivity { 

    private OkHttpClient client = new OkHttpClient();

    private void searchBooks(String query, TextView resultView) {
        String apiKey = "AIzaSyAYkLmFjVtbYxvy_HsQmEtDJ56AMXnTPUw";  
        String url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + apiKey;

        Request request = new Request.Builder().url(url).build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                e.printStackTrace();
                runOnUiThread(() -> resultView.setText("Failed to fetch data."));
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    String responseData = response.body().string();

                    runOnUiThread(() -> resultView.setText(responseData));
                } else {
                    runOnUiThread(() -> resultView.setText("No books found."));
                }
            }
        });
    }
}
