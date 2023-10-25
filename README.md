# Cloudflare Worker Country API

## Overview

The Cloudflare Worker Country API is a serverless application designed to efficiently retrieve information about countries from around the world. It utilizes the `@nexisltd/country` package, making it easy to access detailed country-specific data. This information includes country names, country codes, flag images, nationalities, currencies, and timezones.

The API is hosted on Cloudflare's Worker platform, taking full advantage of Cloudflare's global network infrastructure to ensure swift response times and high availability. This README contains all the essential details for configuring and using the Cloudflare Worker Country API with the `@nexisltd/country` package.

## Features

- **Country Information**: Obtain comprehensive data about various countries.

- **High Performance**: Leverage Cloudflare's worldwide network for speedy and reliable data retrieval.

- **Ease of Use**: Access country data via a straightforward API request.

## API Endpoint

The API endpoint for accessing country information is:

```
https://countries.nexisltd.workers.dev
```

## API Usage

To retrieve information about countries, simply make a GET request to the provided API endpoint. The API response will be formatted in JSON and consist of an array of country objects, each including the following attributes:

- `name`: The name of the country.
- `code`: The country code (e.g., ISO 3166-1 alpha-2 code).
- `flag`: A URL pointing to the country's flag image.
- `nationality`: The nationality or demonym of the country's residents.
- `currency`: The official currency used in the country.
- `tz`: An array of timezones associated with the country.

### Example Request

```http
GET https://countries.nexisltd.workers.dev
```

### Example Response

```json
{
  "countries": [
    {
      "name": "Afghanistan",
      "code": "AF",
      "flag": "https://flagcdn.com/af.svg",
      "nationality": "Afghan",
      "currency": "AFN",
      "tz": ["Asia/Kabul"]
    },
    {
      "name": "Albania",
      "code": "AL",
      "flag": "https://flagcdn.com/al.svg",
      "nationality": "Albanian",
      "currency": "ALL",
      "tz": ["Europe/Tirane"]
    },
    // ... (data for other countries)
  ]
}
```

## Customization

Should you require any additional data or wish to modify the behavior of the Cloudflare Worker script, it can be customized to meet your specific needs. The `@nexisltd/country` package can be extended to provide more detailed country-specific data if necessary.

This Cloudflare Worker Country API with the `@nexisltd/country` package offers a straightforward solution for accessing country-specific information. It is designed to streamline your projects without the need for extensive contributions or updates. Enjoy utilizing it in your applications!
