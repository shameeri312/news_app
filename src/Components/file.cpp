#include <iostream>
#include <string>

int main()
{
    // Get the URL from the user
    std::cout << "Enter the download URL: ";
    std::string url;
    std::getline(std::cin, url);

    // Specify the full path to IDM executable
    std::string idmCommand = "C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe /d " + url;

    // Execute the IDM command
    int result = system(idmCommand.c_str());

    // Check the result of the command execution
    if (result == 0)
    {
        std::cout << "IDM download initiated successfully." << std::endl;
    }
    else
    {
        std::cerr << "Error initiating IDM download." << std::endl;
    }

    return 0;
}
