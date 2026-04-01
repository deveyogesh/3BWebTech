<?php
namespace ETLAB;

class DB {
    private static $conn;

    private static function connect() {
        if (!self::$conn) {
            $host = 'localhost'; $user = 'root'; $pass = ''; $dbname = '3bweb';
            self::$conn = new \mysqli($host, $user, $pass, $dbname);
            if (self::$conn->connect_error) { die("Conn failed: " . self::$conn->connect_error); }
        }
    }

    public static function ExecuteScalar($sql) {
        self::connect();
        $result = self::$conn->query($sql);
        return ($result && $result->num_rows > 0) ? $result->fetch_array()[0] : 0;
    }

    // Naya function jo aapki Api.php maang rahi hai
    public static function ExecuteScalarRow($sql) {
        self::connect();
        $result = self::$conn->query($sql);
        return ($result) ? $result->fetch_assoc() : null;
    }

    // Naya function Update ke liye
    public static function Update($table, $data, $where) {
        self::connect();
        $fields = [];
        foreach($data as $key => $val) { $fields[] = "$key='$val'"; }
        $whereStr = "";
        foreach($where as $key => $val) { $whereStr = "$key='$val'"; }
        $sql = "UPDATE $table SET " . implode(', ', $fields) . " WHERE $whereStr";
        return self::$conn->query($sql);
    }
}