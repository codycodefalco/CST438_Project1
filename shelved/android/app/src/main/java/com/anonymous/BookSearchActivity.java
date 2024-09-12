import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.view.View;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;

public class BookSearchActivity extends AppCompatActivity { 

    private OkHttpClient client = new OkHttpClient();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);

        EditText searchInput = new EditText(this);
        searchInput.setHint("Enter book title");
        layout.addView(searchInput);

        Button searchButton = new Button(this);
        searchButton.setText("Search Books");
        layout.addView(searchButton);

        TextView resultView = new TextView(this);
        layout.addView(resultView);

        setContentView(layout);

        searchButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String query = searchInput.getText().toString();
                if (!query.isEmpty()) {
                    searchBooks(query, resultView);
                } else {
                    resultView.setText("Please enter a search term.");
                }
            }
        });
    }

    private void searchBooks(String query, TextView resultView) {
        String apiKey = "AIzaSyAYkLmFjVtbYxvy_HsQmEtDJ56AMXnTPUw";  // Replace with your actual API key
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
