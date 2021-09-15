import { LiteSerie, SeriesResponse } from '../models/series-response';
import { getItem } from './store';

export class MedusaClient {
  private configuration: { uri: string; key: string } | null = null;

  private async getConfiguration(): Promise<{ uri: string; key: string } | null> {
    if (this.configuration !== null) {
      return this.configuration;
    }

    const uri = await getItem<string>('uri');
    const key = await getItem<string>('apiKey');
    if (!uri || !key) {
      return null;
    } else {
      return (this.configuration = { uri, key });
    }
  }

  async getSeries(): Promise<LiteSerie[]| undefined> {
    const configuration = await this.getConfiguration();
    if (!configuration) {
      return;
    }

    return fetch(`${configuration.uri}/api/v2/series?limit=1000&detailed=true`, {
      headers: { 'X-Api-Key': configuration.key }
    })
      .then((response) => response.json())
      .then((series: SeriesResponse[]) =>
        series.map((x) => ({
          slug: x.id.slug,
          title: x.title,
          language: x.language,
          posterUri: `${configuration.uri}/api/v2/series/${x.id.slug}/asset/posterThumb?api_key=${configuration.key}`,
          fanartUri: `${configuration.uri}/api/v2/series/${x.id.slug}/asset/fanart?api_key=${configuration.key}`,
          bannerUri: `${configuration.uri}/api/v2/series/${x.id.slug}/asset/banner?api_key=${configuration.key}`,
          location: x.config.location,
          genres: x.genres,
          year: x.year
        }))
      );
  }
}


export const medusaClient = new MedusaClient();