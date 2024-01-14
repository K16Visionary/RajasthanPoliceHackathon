<?php
// Check if the report ID is provided in the URL
if (isset($_GET['report_id'])) {
    $reportId = $_GET['report_id'];

    // TODO: Retrieve the report details from the database based on the report ID
    // Replace this with your actual code to fetch report details from the database

    // For demonstration purposes, let's assume we have fetched the report details as an associative array called $report
    $report = [
        'id' => $reportId,
        'title' => 'Cyber Crime Court Report - Report ID #' . $reportId,
        'description' => 'This is your report id = ' . $reportId,
        'victim_name' => 'John Doe', // Assuming victim_name is the victim ID
        'content' => 'After thorough preparation, we are pleased to inform you that your court report, documenting the details of the case for Victim , has been successfully transferred to the nearest court. We appreciate your cooperation in providing the necessary information. Rest assured, you will be notified promptly through a message once the court completes the processing of your report file. Thank you for your patience and collaboration throughout this legal process.',
        // Add more report details as needed
    ];

    // Generate the report content (letter)
    $victimId = $report['victim_name'];
    $reportContent = '<html>';
    $reportContent .= '<head><title>' . $report['title'] . '</title></head>';
    $reportContent .= '<body>';
    $reportContent .= '<h1>' . $report['title'] . '</h1>';
    $reportContent .= '<p>' . $report['description'] . '</p>';
    $reportContent .= '<p>' . $report['content'] . '</p>';
    $reportContent .= '<p>Sincerely,</p>';
    $reportContent .= '<p>XYZ Court</p>';
    $reportContent .= '</body></html>';

    // Output the report content for download or display
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="court_report_' . $reportId . '.html"');
    echo $reportContent;
    exit();
} else {
    // If the report ID is not provided, redirect back to the main page
    header('Location: index.php');
    exit();
}
?>