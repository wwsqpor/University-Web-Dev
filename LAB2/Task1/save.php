<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $account = trim($_POST['account']);
    $password = trim($_POST['password']);
    $action = $_POST['action'];
    $filename = "passwords.txt";

    if ($action === "login") {
        // --- LOGIN LOGIC ---
        $userFound = false;
        if (file_exists($filename)) {
            $lines = file($filename);
            foreach ($lines as $line) {
                $searchString = "Account: " . $account . " | Password: " . $password;
                if (strpos($line, $searchString) !== false) {
                    $userFound = true;
                    break;
                }
            }
        }

        if ($userFound) {
            echo "<h1>Login Successful!</h1>";
            echo "<p>Welcome back, $account.</p>";
            echo '<br><a href="index.html">Logout</a>';
        } else {
            header("Location: index.html");
            exit();
        }

    } elseif ($action === "register") {
        // --- REGISTER LOGIC ---
        $userAlreadyExists = false;
        if (file_exists($filename)) {
            $lines = file($filename);
            foreach ($lines as $line) {
                $searchAccount = "Account: " . $account . " |"; 
                if (strpos($line, $searchAccount) !== false) {
                    $userAlreadyExists = true;
                    break;
                }
            }
        }

        if ($userAlreadyExists) {
            echo "<h1>Error</h1>";
            echo "<p>The account <b>$account</b> is already registered.</p>";
            echo '<br><a href="index.html">Try a different email</a>';
        } else {
            $data = "Account: " . $account . " | Password: " . $password . PHP_EOL;
            $file = fopen($filename, "a");
            if ($file) {
                fwrite($file, $data);
                fclose($file);
                echo "<h1>Account Created!</h1>";
                echo "<p>User $account has been registered.</p>";
                echo '<br><a href="index.html">Go back to Login</a>';
            }
        }

    } elseif ($action === "reset") {
        // --- RESET PASSWORD LOGIC ---
        if (file_exists($filename)) {
            $lines = file($filename);
            $newContents = "";
            $found = false;

            foreach ($lines as $line) {
                $searchAccount = "Account: " . $account . " |";
                if (strpos($line, $searchAccount) !== false) {
                    // Create the updated line
                    $newContents .= "Account: " . $account . " | Password: " . $password . PHP_EOL;
                    $found = true;
                } else {
                    $newContents .= $line;
                }
            }

            if ($found) {
                file_put_contents($filename, $newContents);
                echo "<h1>Success!</h1><p>Your password has been updated.</p>";
                echo '<br><a href="index.html">Login now</a>';
            } else {
                echo "<h1>Error</h1><p>Account not found.</p>";
                echo '<br><a href="reset.html">Try again</a>';
            }
        }
    }
}
?>