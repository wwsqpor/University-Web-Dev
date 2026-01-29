<?php
// Put this at the top to see errors if they happen
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $account = trim($_POST['account']);
    $password = trim($_POST['password']);
    $action = $_POST['action'];
    $filename = "passwords.txt";

    if ($action === "login") {
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
            echo "<h1>Login Successful!</h1><p>Welcome, $account.</p><a href='index.html'>Logout</a>";
        } else {
            header("Location: index.html");
            exit();
        }

    } elseif ($action === "register") {
        $userAlreadyExists = false;
        if (file_exists($filename)) {
            $lines = file($filename);
            foreach ($lines as $line) {
                if (strpos($line, "Account: " . $account . " |") !== false) {
                    $userAlreadyExists = true;
                    break;
                }
            }
        }

        if ($userAlreadyExists) {
            echo "<h1>Error</h1><p>Account already exists.</p><a href='register.html'>Try again</a>";
        } else {
            $data = "Account: " . $account . " | Password: " . $password . PHP_EOL;
            file_put_contents($filename, $data, FILE_APPEND);
            echo "<h1>Account Created!</h1><a href='index.html'>Login now</a>";
        }

    } elseif ($action === "reset") {
        if (file_exists($filename)) {
            $lines = file($filename);
            $newContents = "";
            $found = false;
            foreach ($lines as $line) {
                if (strpos($line, "Account: " . $account . " |") !== false) {
                    $newContents .= "Account: " . $account . " | Password: " . $password . PHP_EOL;
                    $found = true;
                } else {
                    $newContents .= $line;
                }
            }
            if ($found) {
                file_put_contents($filename, $newContents);
                echo "<h1>Success!</h1><p>Password updated.</p><a href='index.html'>Login</a>";
            } else {
                echo "<h1>Error</h1><p>User not found.</p><a href='reset.html'>Try again</a>";
            }
        }
    }
}
?>